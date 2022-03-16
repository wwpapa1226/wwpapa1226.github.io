import { useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';
import Typography from '@mui/material/Typography';
import { IFleetSetup } from './types/IFleetSetup';
import { LabeledList } from '../../list/LabeledList';
import { getFleetShipCount } from './utils/shipCounter';
import { translateShipType } from '../../../utils/shipTypeUtils';
import { ShipType } from '../../../types/ShipType';
import { translateShipRow } from '../../../utils/shipRowUtils';
import { ShipRow } from '../../../types/ShipRow';

interface IProps {
    fleetSetup: IFleetSetup;
}

export const FleetProperties = (props: IProps) => {
    const { fleetSetup } = props;
    const [expanded, setExpanded] = useState<boolean>(false);

    const {
        totalCost,
        shipCount,
        shipCountByType,
        shipCountByRow,
    } = useMemo(() => getFleetShipCount(fleetSetup.ships), [fleetSetup.ships]);

    const exceedingCost = totalCost > fleetSetup.maxCost;
    const exceedingReinforcement = fleetSetup.totalReinforcementCount > fleetSetup.maxReinforcement;
    const hasIssue = exceedingCost || exceedingReinforcement;
    const expandIcon = hasIssue ? <ErrorIcon color="error" /> : <InfoIcon color="primary" />;

    return (
        <Accordion
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}
        >
            <AccordionSummary
                expandIcon={expanded ? <ExpandMoreIcon /> : expandIcon}
            >
                <Stack spacing={1}>
                    <Typography variant="body1">
                        {fleetSetup.name}
                    </Typography>
                    {!expanded && (
                        <div>
                            <Typography variant="body2" color="text.secondary" component="span">
                                {'増援：'}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="span" sx={exceedingReinforcement ? { color: 'red' } : {}}>
                                {`${fleetSetup.totalReinforcementCount} / ${fleetSetup.maxReinforcement}`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="span">
                                {'、司令Pt：'}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="span" sx={exceedingCost ? { color: 'red' } : {}}>
                                {`${totalCost} / ${fleetSetup.maxCost}`}
                            </Typography>
                        </div>
                    )}
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                {expanded && (
                    <LabeledList
                        rows={[
                            {
                                key: 'reinforcementCount',
                                label: '増援',
                                value: (
                                    <Typography variant="body2" sx={exceedingReinforcement ? { color: 'red' } : {}}>
                                        {`${fleetSetup.totalReinforcementCount} / ${fleetSetup.maxReinforcement}`}
                                    </Typography>
                                ),
                            },
                            {
                                key: 'cost',
                                label: '艦隊司令Pt',
                                value: (
                                    <Typography variant="body2" sx={exceedingCost ? { color: 'red' } : {}}>
                                        {`${totalCost} / ${fleetSetup.maxCost}`}
                                    </Typography>
                                ),
                            },
                            {
                                key: 'shipCount',
                                label: '艦船',
                                value: shipCount > 0 ? (
                                    <>
                                        <Typography variant="body2">{`合計　${shipCount}`}</Typography>
                                        {Object.keys(shipCountByType).filter(shipType => shipCountByType[shipType as ShipType] > 0).map(shipType => (
                                            <Typography key={shipType} variant="body2">
                                                {`${translateShipType(shipType as ShipType)}　${shipCountByType[shipType as ShipType]}`}
                                            </Typography>
                                        ))}
                                    </>
                                ) : (
                                    <Typography variant="body2">{'-'}</Typography>
                                ),
                            },
                            {
                                key: 'carriedShipCount',
                                label: '艦載機',
                                value: (shipCountByType[ShipType.FIGHTER] + shipCountByType[ShipType.CORVETTE]) > 0 ? (
                                    <>
                                        <Typography variant="body2">{`${translateShipType(ShipType.FIGHTER)}　${shipCountByType[ShipType.FIGHTER]}`}</Typography>
                                        <Typography variant="body2">{`${translateShipType(ShipType.CORVETTE)}　${shipCountByType[ShipType.CORVETTE]}`}</Typography>
                                    </>
                                ) : (
                                    <Typography variant="body2">{'-'}</Typography>
                                ),
                            },
                            {
                                key: 'rowCount',
                                label: '配置',
                                value: shipCount > 0 ? (
                                    <>
                                        {Object.keys(shipCountByRow).filter(shipRow => shipRow !== ShipRow.NONE).map(shipRow => (
                                            <Typography key={shipRow} variant="body2">
                                                {`${translateShipRow(shipRow as ShipRow)}　${shipCountByRow[shipRow as ShipRow]}`}
                                            </Typography>
                                        ))}
                                    </>
                                ) : (
                                    <Typography variant="body2">{'-'}</Typography>
                                ),
                            },
                        ]}
                    />
                )}
            </AccordionDetails>
        </Accordion>
    );
}
