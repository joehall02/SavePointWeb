import { useStyles } from '../components/Cover/styles';
import { PlatformLabel } from './platforms';

type Classes = keyof ReturnType<typeof useStyles>['classes'];

export const PlatformImageClasses: Partial<Record<PlatformLabel, Classes>> = {
	[PlatformLabel.Ps1]: 'ps1',
	[PlatformLabel.Ps2]: 'ps2',
	[PlatformLabel.Ps3]: 'ps3',
	[PlatformLabel.Ps4]: 'ps4',
	[PlatformLabel.Ps5]: 'ps5',
	[PlatformLabel.Psp]: 'psp',
	[PlatformLabel.PsVita]: 'psVita',
	[PlatformLabel.OriginalXbox]: 'originalXbox',
	[PlatformLabel.Xbox360]: 'xbox360',
	[PlatformLabel.XboxOne]: 'xboxOne',
	[PlatformLabel.XboxSeriesXandS]: 'xboxSeriesXandS',
	[PlatformLabel.SegaMegaDrive]: 'segaMegaDrive',
	[PlatformLabel.Wii]: 'wii',
	[PlatformLabel.Switch]: 'switch',
	[PlatformLabel.NES]: 'nes',
	[PlatformLabel.DS]: 'ds',
	// [PlatformLabel.PC]: 'pc',
};