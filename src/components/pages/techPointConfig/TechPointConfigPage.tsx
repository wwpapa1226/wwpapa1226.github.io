import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { ShipFilterState } from '../../filter/types/ShipFilterState';
import { createInitialShipFilterState, applyShipFilter } from '../../filter/filterUtils';
import { shipDefinitions as allShipDefinitions } from '../../../data/shipDefinitions';
import { NavigationBar } from '../../navigation/NavigationBar';
import { PageContent } from '../../pageStructure/PageContent';
import { PageFooter } from '../../pageStructure/PageFooter';
import { routes } from '../../../utils/routes';
import { TechPointConfigList } from './TechPointConfigList';
import { boolMapToArray, combineBoolMap } from '../../../utils/boolMapUtils';
import { TechPointConfigActionBar } from './TechPointConfigActionBar';
import { ShipSource } from '../../../types/ShipSource';
import { ShipType } from '../../../types/ShipType';
import { useTechPointConfig } from './hooks/useTechPointConfig';

const supportedShipTypes: ShipType[] = [ShipType.AUXILIARY, ShipType.CARRIER, ShipType.BATTLE_CRUISER, ShipType.CRUISER, ShipType.CORVETTE];

export const TechPointConfigPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [shipFilter, setShipFilter] = useState<ShipFilterState>(() => combineBoolMap(searchParams.getAll('filter'), createInitialShipFilterState()));

    useEffect(() => {
        setSearchParams(routes.techPointConfig.createSearchParams({
            filter: boolMapToArray<ShipFilterState>(shipFilter),
        }));
    }, [shipFilter]);

    const shipDefinitions = useMemo(() => {
        return allShipDefinitions
            .filter(s => s.source === ShipSource.TECH_FILE || s.source === ShipSource.STARTER_SHIP)
            .filter(s => supportedShipTypes.includes(s.type));
    }, []);

    const filteredShipDefinitions = useMemo(() => applyShipFilter(shipDefinitions, shipFilter), [shipDefinitions, shipFilter]);

    const {
        config,
        modified,
        stored,
        handleToggleModule,
        handleToggleEnhancement,
        handleReset,
        handleCancel,
        handleSave,
    } = useTechPointConfig({
        supportedShips: shipDefinitions,
        visibleShips: filteredShipDefinitions,
    });

    return (
        <>
            <NavigationBar currentRoute={routes.techPointConfig.path} />
            <TechPointConfigActionBar
                shipFilter={shipFilter}
                modified={modified}
                stored={stored}
                onFilterChange={setShipFilter}
                onReset={handleReset}
                onCancel={handleCancel}
                onSave={handleSave}
            />
            <PageContent>
                <Box component="div" p={1}>
                    <TechPointConfigList
                        config={config}
                        onToggleModule={handleToggleModule}
                        onToggleEnhancement={handleToggleEnhancement}
                    />
                </Box>
            </PageContent>
            <PageFooter />
        </>
    );
};

export default TechPointConfigPage;
