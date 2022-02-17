import { ShipId } from '../../data/shipIds';
import { isShipObtainableThroughTechFile } from '../../utils/shipDefinitionUtils';
import { PossessionState } from '../types/PossessionState';
import { IUserSettings, IMinifiedUserSettings, ShipSettingState } from '../types/UserSettings';
import { WishState } from '../types/WishState';

const STORAGE_KEY = 'settings';

export function getCurrentUserSettings(): IUserSettings {
    return restoreUserSettings() ?? createInitialUserSettings();
}

export function saveUserSettings(userSettings: IUserSettings) {
    const serializedUserSettings = JSON.stringify(minifyUserSettings(userSettings));
    window.localStorage.setItem(STORAGE_KEY, serializedUserSettings);
}

export function restoreUserSettings(): IUserSettings | null {
    const serializedUserSettings = window.localStorage.getItem(STORAGE_KEY);
    if (!serializedUserSettings) {
        return createInitialUserSettings();
    }

    const userSettings = parseUserSettings(serializedUserSettings);

    return !!userSettings ? migrateUserSettings(unminifyUserSettings(userSettings)) : null;
}

function minifyUserSettings(userSettings: IUserSettings): IMinifiedUserSettings {
    return {
        ...userSettings,
        ships: Object.keys(userSettings.ships).map(shipId => {
            const { possession, wish } = userSettings.ships[shipId];
            return [shipId, possession, wish];
        }),
    };
}

function migrateUserSettings(userSettings: IUserSettings): IUserSettings {
    const ac721TypeC = userSettings.ships['AC721_C'];
    if (ac721TypeC) {
        userSettings.ships[ShipId.AC721_TE_A] = ac721TypeC;
        delete userSettings.ships['AC721_C'];
    }
    return userSettings;
}

function unminifyUserSettings(userSettings: IMinifiedUserSettings): IUserSettings {
    return {
        ...userSettings,
        ships: userSettings.ships.reduce((acc, [shipId, possession, wish]) => ({
            ...acc,
            [shipId]: { possession, wish },
        }), {}),
    };
}

function parseUserSettings(serializedUserSettings: string): IMinifiedUserSettings | null {
    try {
        return JSON.parse(serializedUserSettings) as IMinifiedUserSettings;
    } catch (e) {
        alert('ERROR - Failed to restore user settings');
        console.error(e);
        return null;
    }
}

export function createInitialUserSettings(): IUserSettings {
    return {
        formatVersion: 1,
        ships: {
            [ShipId.FG300_A]: {
                possession: PossessionState.POSSESSED,
                wish: WishState.UNDEFINED,
            },
            [ShipId.FG300_B]: {
                possession: PossessionState.POSSESSED,
                wish: WishState.UNDEFINED,
            },
            [ShipId.FG300_C]: {
                possession: PossessionState.POSSESSED,
                wish: WishState.UNDEFINED,
            },
            [ShipId.AC721_A]: {
                possession: PossessionState.POSSESSED,
                wish: WishState.UNDEFINED,
            },
            [ShipId.AC721_D]: {
                possession: PossessionState.POSSESSED,
                wish: WishState.UNDEFINED,
            },
            [ShipId.CAS066_A]: {
                possession: PossessionState.POSSESSED,
                wish: WishState.UNDEFINED,
            },
            [ShipId.CV_II003]: {
                possession: PossessionState.POSSESSED,
                wish: WishState.UNDEFINED,
            },
            [ShipId.KCCPV2_0_A]: {
                possession: PossessionState.POSSESSED,
                wish: WishState.UNDEFINED,
            },
            [ShipId.KCCPV2_0_D]: {
                possession: PossessionState.POSSESSED,
                wish: WishState.UNDEFINED,
            },
            [ShipId.ST59]: {
                possession: PossessionState.POSSESSED,
                wish: WishState.UNDEFINED,
            },
        },
    };
}

export function applyPossessionStateToShipSettings(
    state: ShipSettingState,
    shipId: string,
    possession: PossessionState,
): ShipSettingState {
    return {
        ...state,
        [shipId]: {
            ...state[shipId],
            possession,
            wish: (isShipObtainableThroughTechFile(shipId) && possession === PossessionState.POSSESSED)
                ? WishState.UNDEFINED
                : state[shipId]?.wish ?? WishState.UNDEFINED,
        }
    };
}

export function isPossessingShip(shipId: string, userSettings: IUserSettings): boolean {
    return userSettings.ships[shipId]?.possession === PossessionState.POSSESSED ?? false;
}

export function isWantedShip(shipId: string, userSettings: IUserSettings): boolean {
    return userSettings.ships[shipId]?.wish === WishState.WANTED ?? false;
}

export function isUnwantedShip(shipId: string, userSettings: IUserSettings): boolean {
    return userSettings.ships[shipId]?.wish === WishState.NOT_WANTED ?? false;
}
