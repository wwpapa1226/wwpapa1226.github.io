import { useMemo, useState, memo } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Container } from '../../container/Container';
import { NavigationBar } from '../../navigation/NavigationBar';
import { createResearchConfiguration, getAllFilterCombinations, getFilteredResearchConfigurations, getShipDefinitionsForResearchAgreement, getShipFilterOptions } from './utils/researchAgreementUtils';
import { IUserSettings } from '../../../userSettings/types/UserSettings';
import { getCurrentUserSettings } from '../../../userSettings/utils/userSettingsUtils';
import { ResearchAgreementTable } from './ResearchAgreementTable';
import { ResearchAgreementShipsView } from './ResearchAgreementShipsView';
import { ViewMode, ViewModeSelection } from './ViewModeSelection';
import { IResearchFilterState } from './types/IResearchConfiguration';
import { ResearchFilter } from './ResearchFilter';

const MemoizedResearchAgreementTable = memo(ResearchAgreementTable);
const MemoizedResearchAgreementShipsView = memo(ResearchAgreementShipsView);

export const ResearchAgreementPage = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('ships');

    const shipDefinitions = useMemo(() => getShipDefinitionsForResearchAgreement(), []);
    const userSettings = useMemo<IUserSettings>(() => getCurrentUserSettings(), []);
    const allFilterOptions = useMemo(() => getAllFilterCombinations(), []);
    const allResearchConfigurations = useMemo(() => allFilterOptions.map(filterState => {
        return createResearchConfiguration(filterState, shipDefinitions, userSettings);
    }), [allFilterOptions, shipDefinitions]);

    const shipFilterOptions = useMemo(() => getShipFilterOptions(shipDefinitions, userSettings), [shipDefinitions, userSettings]);

    const [filterState, setFilterState] = useState<IResearchFilterState>({
        shipId: null,
        manufacturerFilter: null,
        strategyTypeFilter: null,
        tacticTypeFilter: null,
    });

    const filteredResearchConfigurations = useMemo(() => getFilteredResearchConfigurations(allResearchConfigurations, filterState), [allResearchConfigurations, filterState]);

    return (
        <>
            <NavigationBar currentRoute="/researchAgreement" />
            <Container>
                <Box p={1}>
                    <Stack spacing={1}>
                        <Stack pt={1} pb={1} spacing={2}>
                            <Typography variant="body2">
                                {'ここでは「研究協定」に関する各種確率を表示しています。'}
                            </Typography>
                            <Typography variant="body2">
                                {'研究方針（委託企業、戦略能力、戦術能力）を選択した場合はその組み合わせで手に入る設計図や追加モジュールの確率が表示されます。艦船を選択した場合はその艦船を含む研究方針が確率順に表示されます。'}
                            </Typography>
                            <Typography variant="body2">
                                {'取得済みの設計図はマイリストで設定してください。'}
                            </Typography>
                        </Stack>
                        <Paper>
                            <Box p={2}>
                                <Stack spacing={2}>
                                    <Typography variant="body2">
                                        {'研究方針'}
                                    </Typography>
                                    <div>
                                        <ResearchFilter filterState={filterState} onChange={setFilterState} shipFilterOptions={shipFilterOptions} />
                                    </div>
                                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                        <ViewModeSelection mode={viewMode} onChange={setViewMode} />
                                    </Box>
                                </Stack>
                            </Box>
                        </Paper>
                        {viewMode === 'ships' && (
                            <MemoizedResearchAgreementShipsView configurations={filteredResearchConfigurations} filterState={filterState} />
                        )}
                        {viewMode === 'table' && (
                            <MemoizedResearchAgreementTable configurations={filteredResearchConfigurations} />
                        )}
                    </Stack>
                </Box>
            </Container>
        </>
    );
};

export default ResearchAgreementPage;
