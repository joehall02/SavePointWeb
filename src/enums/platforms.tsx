const playstation = '/images/playstation.webp';
const playstation2 = '/images/playstation2.webp';
const playstation3 = '/images/playstation3.webp';
const playstation4 = '/images/playstation4.webp';
const playstation5 = '/images/playstation5.webp';
const psp = '/images/psp.webp';
const psVita = '/images/psvita.webp';
const originalXbox = '/images/originalXbox.webp';
const xbox360 = '/images/xbox360.webp';
const xboxOne = '/images/xboxOne.webp';
const xboxSeriesXandS = '/images/xboxseriesxands.webp';
const segaMegaDrive = '/images/segamegadrive.webp';
const wii = '/images/wii.webp';
const nintendoSwitch = '/images/switch.webp';
const nes = '/images/nes.webp';
const ds = '/images/ds.webp';
// const pc = '/images/pc.webp';

enum Platforms {
	Ps1 = 'ps1',
	Ps2 = 'ps2',
	Ps3 = 'ps3',
	Ps4 = 'ps4',
	Ps5 = 'ps5',
	Psp = 'psp',
	PsVita = 'ps_vita',
	OriginalXbox = 'original_xbox',
	Xbox360 = 'xbox_360',
	XboxOne = 'xbox_one',
	XboxSeriesXandS = 'xbox_series_x_s',
	SegaMegaDrive = 'sega_mega_drive',
	wii = 'wii',
	Switch = 'switch',
	NES = 'nes',
	DS = 'ds',
	PC = 'pc',	
}

export enum PlatformLabel {
	Ps1 = 'PlayStation',
	Ps2 = 'PlayStation 2',
	Ps3 = 'PlayStation 3',
	Ps4 = 'PlayStation 4',
	Ps5 = 'PlayStation 5',
	Psp = 'PlayStation Portable',
	PsVita = 'PlayStation Vita',
	OriginalXbox = 'Xbox',
	Xbox360 = 'Xbox 360',
	XboxOne = 'Xbox One',
	XboxSeriesXandS = 'Xbox Series X|S',
	SegaMegaDrive = 'Sega Mega Drive/Genesis',
	Wii = 'Wii',
	Switch = 'Nintendo Switch',
	NES = 'Nintendo Entertainment System',
	DS = 'Nintendo DS',
	PC = 'PC (Microsoft Windows)',
}

export enum IgdbPlatformId {
	Ps1 = 7,
	Ps2 = 8,
	Ps3 = 9,
	Ps4 = 48,
	Ps5 = 167,
	Psp = 38,
	PsVita = 46,
	OriginalXbox = 11,
	Xbox360 = 12,
	XboxOne = 49,
	XboxSeriesXandS = 169,
	SegaMegaDrive = 29,
	Wii = 5,
	Switch = 130,
	NES = 18,
	DS = 20,
	PC = 6,
}

export enum PlatformId {
	Ps1 = 1,
	Ps2 = 2,
	Ps3 = 3,
	Ps4 = 4,
	Ps5 = 5,
	Psp = 6,
	PsVita = 7,
	OriginalXbox = 8,
	Xbox360 = 9,
	XboxOne = 10,
	XboxSeriesXandS = 11,
	SegaMegaDrive = 12,
	Wii = 13,
	Switch = 14,
	NES = 15,
	DS = 16,
	PC = 17,
}

export const PlatformIds: Record<PlatformLabel, IgdbPlatformId> = {
	[PlatformLabel.Ps1]: IgdbPlatformId.Ps1,
	[PlatformLabel.Ps2]: IgdbPlatformId.Ps2,
	[PlatformLabel.Ps3]: IgdbPlatformId.Ps3,
	[PlatformLabel.Ps4]: IgdbPlatformId.Ps4,
	[PlatformLabel.Ps5]: IgdbPlatformId.Ps5,
	[PlatformLabel.Psp]: IgdbPlatformId.Psp,
	[PlatformLabel.PsVita]: IgdbPlatformId.PsVita,
	[PlatformLabel.OriginalXbox]: IgdbPlatformId.OriginalXbox,
	[PlatformLabel.Xbox360]: IgdbPlatformId.Xbox360,
	[PlatformLabel.XboxOne]: IgdbPlatformId.XboxOne,
	[PlatformLabel.XboxSeriesXandS]: IgdbPlatformId.XboxSeriesXandS,
	[PlatformLabel.SegaMegaDrive]: IgdbPlatformId.SegaMegaDrive,
	[PlatformLabel.Wii]: IgdbPlatformId.Wii,
	[PlatformLabel.Switch]: IgdbPlatformId.Switch,
	[PlatformLabel.NES]: IgdbPlatformId.NES,
	[PlatformLabel.DS]: IgdbPlatformId.DS,
	[PlatformLabel.PC]: IgdbPlatformId.PC,
};

export const IgdbToPlatformId: Record<IgdbPlatformId, PlatformId> = {
	[IgdbPlatformId.Ps1]: PlatformId.Ps1,
	[IgdbPlatformId.Ps2]: PlatformId.Ps2,
	[IgdbPlatformId.Ps3]: PlatformId.Ps3,
	[IgdbPlatformId.Ps4]: PlatformId.Ps4,
	[IgdbPlatformId.Ps5]: PlatformId.Ps5,
	[IgdbPlatformId.Psp]: PlatformId.Psp,
	[IgdbPlatformId.PsVita]: PlatformId.PsVita,
	[IgdbPlatformId.OriginalXbox]: PlatformId.OriginalXbox,
	[IgdbPlatformId.Xbox360]: PlatformId.Xbox360,
	[IgdbPlatformId.XboxOne]: PlatformId.XboxOne,
	[IgdbPlatformId.XboxSeriesXandS]: PlatformId.XboxSeriesXandS,
	[IgdbPlatformId.SegaMegaDrive]: PlatformId.SegaMegaDrive,
	[IgdbPlatformId.Wii]: PlatformId.Wii,
	[IgdbPlatformId.Switch]: PlatformId.Switch,
	[IgdbPlatformId.NES]: PlatformId.NES,
	[IgdbPlatformId.DS]: PlatformId.DS,
	[IgdbPlatformId.PC]: PlatformId.PC,
};

export const PlatformLabels: Record<Platforms, PlatformLabel> = {
	[Platforms.Ps1]: PlatformLabel.Ps1,
	[Platforms.Ps2]: PlatformLabel.Ps2,
	[Platforms.Ps3]: PlatformLabel.Ps3,
	[Platforms.Ps4]: PlatformLabel.Ps4,
	[Platforms.Ps5]: PlatformLabel.Ps5,
	[Platforms.Psp]: PlatformLabel.Psp,
	[Platforms.PsVita]: PlatformLabel.PsVita,
	[Platforms.OriginalXbox]: PlatformLabel.OriginalXbox,
	[Platforms.Xbox360]: PlatformLabel.Xbox360,
	[Platforms.XboxOne]: PlatformLabel.XboxOne,
	[Platforms.XboxSeriesXandS]: PlatformLabel.XboxSeriesXandS,
	[Platforms.SegaMegaDrive]: PlatformLabel.SegaMegaDrive,
	[Platforms.wii]: PlatformLabel.Wii,
	[Platforms.Switch]: PlatformLabel.Switch,
	[Platforms.NES]: PlatformLabel.NES,
	[Platforms.DS]: PlatformLabel.DS,
	[Platforms.PC]: PlatformLabel.PC,
};

export const PlatformBoxes: Partial<Record<PlatformLabel, string>> = {
	[PlatformLabel.Ps1]: playstation,
	[PlatformLabel.Ps2]: playstation2,
	[PlatformLabel.Ps3]: playstation3,
	[PlatformLabel.Ps4]: playstation4,
	[PlatformLabel.Ps5]: playstation5,
	[PlatformLabel.Psp]: psp,
	[PlatformLabel.PsVita]: psVita,
	[PlatformLabel.OriginalXbox]: originalXbox,
	[PlatformLabel.Xbox360]: xbox360,
	[PlatformLabel.XboxOne]: xboxOne,
	[PlatformLabel.XboxSeriesXandS]: xboxSeriesXandS,
	[PlatformLabel.SegaMegaDrive]: segaMegaDrive,
	[PlatformLabel.Wii]: wii,
	[PlatformLabel.Switch]: nintendoSwitch,
	[PlatformLabel.NES]: nes,
	[PlatformLabel.DS]: ds,
	// [PlatformLabel.PC]: playstation,
};