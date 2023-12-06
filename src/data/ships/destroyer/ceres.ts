import { Manufacturer } from '../../../types/Manufacturer';
import { ResearchManufacturer } from '../../../types/ResearchManufacturer';
import { ResearchStrategyType } from '../../../types/ResearchStrategyType';
import { IShipDefinition } from '../../../types/ShipDefinition';
import { ShipRow } from '../../../types/ShipRow';
import { ShipSource } from '../../../types/ShipSource';
import { ShipType, ShipSubType } from '../../../types/ShipType';
import { ShipId } from '../../shipIds';

export const ceres: IShipDefinition[] = [
    {
        id: ShipId.CERES_A,
        name: 'セレス級　Ａ艦載型',
        translatedName: {
            en: 'Ceres - Aircraft Type',  
        },
        type: ShipType.DESTROYER,
        cost: 8,
        weight: 10,
        row: ShipRow.BACK,
        operationLimit: 10,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.JUPITER_INDUSTRIES,
        researchManufacturer: ResearchManufacturer.JUPITER_INDUSTRIES,
        researchStrategyTypes: [ResearchStrategyType.STRATEGY_AND_SUPPORT],
        researchTacticTypes: [],
        subModelIds: [ShipId.CERES_B, ShipId.CERES_C],
        carryFighter: 2,
        carryFighterType: ShipSubType.MEDIUM_FIGHTER,
        defaultStats: {
            hp: 32310,
            armor: 20,
            shield: 2,
            speed: 850,
            warpSpeed: 4250,
            dpmShip: 1500,
            dpmAntiAir: 216,
            dpmSiege: 252,
        },
    },
    {
        id: ShipId.CERES_B,
        name: 'セレス級　Ｂ支援型',
        translatedName: {
            en: 'Ceres - Support Type',
        },
        type: ShipType.DESTROYER,
        cost: 8,
        weight: 10,
        row: ShipRow.BACK,
        operationLimit: 10,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.JUPITER_INDUSTRIES,
        researchManufacturer: ResearchManufacturer.JUPITER_INDUSTRIES,
        researchStrategyTypes: [ResearchStrategyType.STRATEGY_AND_SUPPORT],
        researchTacticTypes: [],
        baseModelId: ShipId.CERES_A,
        defaultStats: {
            hp: 32310,
            armor: 20,
            shield: 2,
            speed: 850,
            warpSpeed: 4250,
            dpmShip: 1500,
            dpmAntiAir: 3096,
            dpmSiege: 252,
        },
    },
    {
        id: ShipId.CERES_C,
        name: 'セレス級　Ｃ戦術型',
        translatedName: {
            en: 'Ceres - Tactical Type',
        },
        type: ShipType.DESTROYER,
        cost: 8,
        weight: 10,
        row: ShipRow.BACK,
        operationLimit: 10,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.JUPITER_INDUSTRIES,
        researchManufacturer: ResearchManufacturer.JUPITER_INDUSTRIES,
        researchStrategyTypes: [ResearchStrategyType.STRATEGY_AND_SUPPORT],
        researchTacticTypes: [],
        baseModelId: ShipId.CERES_A,
        defaultStats: {
            hp: 32310,
            armor: 20,
            shield: 2,
            speed: 850,
            warpSpeed: 4250,
            dpmShip: 1500,
            dpmAntiAir: 216,
            dpmSiege: 252,
        },
    },
];
