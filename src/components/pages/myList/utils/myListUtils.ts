import { IShipDefinition } from '../../../../types/ShipDefinition';
import { ShipRow } from '../../../../types/ShipRow';
import { ShipType } from '../../../../types/ShipType';
import { translateShipRow } from '../../../../utils/shipRowUtils';
import { shipTypeToSortValue, translateShipType } from '../../../../utils/shipTypeUtils';
import { normalizeSortFn } from '../../../table';

export function formatShipListForSharing(shipDefinitions: IShipDefinition[]): string {
    const frontRowShips: IShipDefinition[] = [];
    const middleRowShips: IShipDefinition[] = [];
    const backRowShips: IShipDefinition[] = [];
    const corvettes: IShipDefinition[] = [];
    const fighters: IShipDefinition[] = [];

    shipDefinitions.forEach(ship => {
        switch (ship.row) {
            case ShipRow.FRONT: {
                frontRowShips.push(ship);
                break;
            }
            case ShipRow.MIDDLE: {
                middleRowShips.push(ship);
                break;
            }
            case ShipRow.BACK: {
                backRowShips.push(ship);
                break;
            }
            default: {
                switch (ship.type) {
                    case ShipType.CORVETTE: {
                        corvettes.push(ship);
                        break;
                    }
                    case ShipType.FIGHTER: {
                        fighters.push(ship);
                        break;
                    }
                }
            }
        }
    });

    const sortFn = normalizeSortFn([
        (a: IShipDefinition, b: IShipDefinition) => shipTypeToSortValue(a.type, a.subType) - shipTypeToSortValue(b.type, b.subType),
        (a: IShipDefinition, b: IShipDefinition) => a.name.localeCompare(b.name, 'ja-JP'),
    ]);

    return [
        '所持している艦船/設計図',
        [
            `【${translateShipRow(ShipRow.FRONT)}】`,
            ...frontRowShips.sort(sortFn).map(ship => `　${ship.name}`),
        ].join('\n'),
        [
            `【${translateShipRow(ShipRow.MIDDLE)}】`,
            ...middleRowShips.sort(sortFn).map(ship => `　${ship.name}`),
        ].join('\n'),
        [
            `【${translateShipRow(ShipRow.BACK)}】`,
            ...backRowShips.sort(sortFn).map(ship => `　${ship.name}`),
        ].join('\n'),
        [
            `【${translateShipType(ShipType.CORVETTE)}】`,
            ...corvettes.sort(sortFn).map(ship => `　${ship.name}`),
        ].join('\n'),
        [
            `【${translateShipType(ShipType.FIGHTER)}】`,
            ...fighters.sort(sortFn).map(ship => `　${ship.name}`),
        ].join('\n'),
    ].join('\n\n');
}
