import { enhancements, strategy } from '../../../enhancements/enhancements';
import { Manufacturer } from '../../../types/Manufacturer';
import { ResearchManufacturer } from '../../../types/ResearchManufacturer';
import { ResearchStrategyType } from '../../../types/ResearchStrategyType';
import { ResearchTacticType } from '../../../types/ResearchTacticType';
import { IShipDefinition, ISystemModule } from '../../../types/ShipDefinition';
import { ShipRow } from '../../../types/ShipRow';
import { ShipSource } from '../../../types/ShipSource';
import { ShipType } from '../../../types/ShipType';
import { modules } from '../../modules';
import { ShipId } from '../../shipIds';

const staticModules: ISystemModule[] = [
    modules.commandSystem(),
    modules.armorSystem({
        skills: [
            enhancements.increaseHp().withPercentageValue(10).withCost(5),
            enhancements.increaseHp().withPercentageValue(10).withCost(5),
            enhancements.increaseHp().withPercentageValue(10).withCost(5),
            enhancements.reduceHitByMissleAndTorpedo().withPercentageValue(15, 25).withCost(5),
        ],
        skillSlots: 3,
    }),
    modules.propulsionSystem({
        skills: [
            enhancements.increaseEvasion().withPercentageValue(8).withCost(8),
            enhancements.reduceLockOn().withPercentageValue(30).withCost(8),
            enhancements.reduceLockOn().withPercentageValue(30).withCost(8),
        ],
        skillSlots: 2,
    }),
];

export const nebulaChaser: IShipDefinition[] = [
    {
        id: ShipId.NEBULA_CHASER_A,
        name: 'ネビュラチェイサー　Ａ弾道型',
        translatedName: {
            en: 'Nebula Chaser - Ballistic Type',
        },
        type: ShipType.CORVETTE,
        cost: 0,
        weight: 10,
        row: ShipRow.NONE,
        operationLimit: 10,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.ANTONIOS_CONSORTIUM,
        researchManufacturer: ResearchManufacturer.ANTONIOS_CONSORTIUM,
        researchStrategyTypes: [ResearchStrategyType.OUTSTANDING_FIREPOWER, ResearchStrategyType.FIGHTER_AND_CORVETTE],
        researchTacticTypes: [ResearchTacticType.DIRECT_FIRE_WEAPONS],
        subModelIds: [ShipId.NEBULA_CHASER_B],
        modules: [
            modules.static({
                id: 'w1',
                name: '機載武器システム',
                translatedName: {
                    en: 'Airborne Weapon System',
                },
                mainSystem: true,
                skills: [
                    strategy.prioritizeTargets().withCost(12),
                    enhancements.increaseDamage().withPercentageValue(10).withCost(8),
                    enhancements.increaseDamage().withPercentageValue(10).withCost(8),
                    enhancements.reduceCooldown().withPercentageValue(15).withCost(8),
                    enhancements.increaseCriticalDamageAndChance().withPercentageValue(50).withCost(8),
                    enhancements.reduceLockOn().withPercentageValue(30).withCost(8),
                    enhancements.increaseHitRate().withPercentageValue(10).withCost(8),
                    enhancements.reduceCooldown().withPercentageValue(15).withCost(8),
                    enhancements.increaseHitRateVsAircraft().withPercentageValue(15).withCost(8),
                ],
                skillSlots: 6,
                parts: [
                    {
                        text: [
                            'CG-2880型　2連速射砲',
                            '対小型：',
                            '・直射、実弾、対艦：2400、対空：192、攻城：336',
                            '反撃対空',
                        ],
                    },
                ],
            }),
            modules.static({
                id: 'w2',
                name: '攻撃ミサイルシステム',
                translatedName: {
                    en: 'Assault Missile System',
                },
                skills: [
                    enhancements.increaseMissileAndTorpedoDamage().withPercentageValue(10).withCost(6),
                    enhancements.increaseMissileAndTorpedoDamage().withPercentageValue(10).withCost(6),
                    enhancements.increaseMissileAndTorpedoHitRate().withPercentageValue(10).withCost(6),
                    enhancements.reduceCooldown().withPercentageValue(15).withCost(6),
                ],
                skillSlots: 3,
                parts: [
                    {
                        text: [
                            'CM-4x1200型　ロケット発射塔',
                            '対小型：',
                            '・投射、実弾、対艦：720、対空：475、攻城：252',
                            '反撃対空',
                        ],
                    },
                ],
            }),
            modules.static({
                id: 'sp1',
                name: '通信増強システム',
                translatedName: {
                    en: 'Information Enhancement System',
                },
                effects: [
                    enhancements.increaseHitRate().withPercentageValue(30),
                ],
                skills: [
                    enhancements.reduceHitByMissleAndTorpedo().withPercentageValue(20).withCost(8),
                    enhancements.reduceHitByDirectFire().withPercentageValue(14.8).withCost(8),
                ],
                skillSlots: 2,
            }),
            ...staticModules,
        ],
        defaultStats: {
            hp: 5650,
            armor: 2,
            shield: 0,
            speed: 2500,
            warpSpeed: 12500,
            dpmShip: 3120,
            dpmAntiAir: 667,
            dpmSiege: 588,
        },
    },
    {
        id: ShipId.NEBULA_CHASER_B,
        name: 'ネビュラチェイサー　Ｂパルス型',
        translatedName: {
            en: 'Nebula Chaser - Pulse Cannon Type',
        },
        type: ShipType.CORVETTE,
        cost: 0,
        weight: 5,
        row: ShipRow.NONE,
        operationLimit: 10,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.ANTONIOS_CONSORTIUM,
        researchManufacturer: ResearchManufacturer.ANTONIOS_CONSORTIUM,
        researchStrategyTypes: [ResearchStrategyType.OUTSTANDING_FIREPOWER, ResearchStrategyType.FIGHTER_AND_CORVETTE],
        researchTacticTypes: [ResearchTacticType.DIRECT_FIRE_WEAPONS],
        baseModelId: ShipId.NEBULA_CHASER_A,
        modules: [
            modules.static({
                id: 'w1',
                name: '機載武器システム',
                translatedName: {
                    en: 'Airborne Weapon System',
                },
                mainSystem: true,
                skills: [
                    strategy.rapidFire(80, 60, 15, 10).withCost(13),
                    enhancements.increaseDamage().withPercentageValue(10).withCost(9),
                    enhancements.increaseDamage().withPercentageValue(10).withCost(9),
                    enhancements.increaseHitRate().withPercentageValue(10).withCost(9),
                    enhancements.increaseHitRate().withPercentageValue(10).withCost(9),
                    enhancements.reduceCooldown().withPercentageValue(15).withCost(9),
                    enhancements.increaseCriticalDamageAndChance().withPercentageValue(50).withCost(9),
                    enhancements.reduceLockOn().withPercentageValue(30).withCost(9),
                ],
                skillSlots: 6,
                parts: [
                    {
                        text: [
                            'CP-170T/D　「アイオブプトレマイオス」',
                            '対小型：',
                            '・直射、エネルギー、対艦：4784、対空：3680、攻城：73',
                            '反撃対空',
                        ],
                    },
                ],
            }),
            modules.static({
                id: 'sp1',
                name: '通信増強システム',
                translatedName: {
                    en: 'Information Enhancement System',
                },
                effects: [
                    enhancements.increaseHitRate().withPercentageValue(30),
                ],
                skills: [
                    enhancements.reduceHitByDirectFire().withPercentageValue(15).withCost(10),
                    enhancements.reduceHitByMissleAndTorpedo().withPercentageValue(20).withCost(10),
                    enhancements.reduceHitBySlow().withPercentageValue(25).withCost(10),
                ],
                skillSlots: 2,
            }),
            modules.static({
                id: 'sp2',
                name: 'パルスエネルギー貯蔵システム',
                translatedName: {
                    en: 'Pulse Energy Storage System',
                },
                effects: [
                    enhancements.increaseDamage().withPercentageValue(15),
                ],
            }),
            ...staticModules,
        ],
        defaultStats: {
            hp: 4950,
            armor: 2,
            shield: 0,
            speed: 2500,
            warpSpeed: 12500,
            dpmShip: 3680,
            dpmAntiAir: 3680,
            dpmSiege: 73,
        },
    },
];
