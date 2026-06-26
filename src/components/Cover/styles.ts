import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { PlatformLabel } from '../../enums/platforms';

interface IStyleProps {
	mobileUi?: boolean;
	boxPlatform?: PlatformLabel;
	isTablet?: boolean;
}

const mobileHeights = (isTablet: boolean | undefined, mobile: number, tablet: number) => ({
	maxHeight: mobile,
	...(isTablet && { maxHeight: tablet }),
});

export const useStyles = makeStyles<IStyleProps>()((theme: Theme, { mobileUi, isTablet, boxPlatform }) => ({
	coverContainer: {
		display: 'flex',
		justifyContent: mobileUi ? 'start' : 'center',
		width: '100%',
		...(mobileUi && {
			transform: `translateY(${theme.spacing(-10)})`,
			marginBottom: theme.spacing(-10),
			...(isTablet && {
				transform: `translateY(${theme.spacing(-50)})`,	
				maxHeight: 200,
			}),
		}),
	},
	coverImageWrapper: {
		position: 'relative',
		width: mobileUi ? 'auto' : '100%',
	},
	cover: {
		display: 'block',
		width: mobileUi ? 'auto' : '100%',
		height: 'auto',
		maxHeight: 650,
		objectFit: 'contain',
		zIndex: 1,
		...(mobileUi && {
			border: boxPlatform ? 'none' : `3px solid ${theme.palette.primary.main}`,
			maxHeight: 250,
			
			...((boxPlatform === PlatformLabel.Ps1 ||
				boxPlatform === PlatformLabel.DS) && {
				transform: 'translateX(30px)',
			}),
			...(isTablet && {
				maxHeight: 500,
				
				...((boxPlatform === PlatformLabel.Ps1 ||
					boxPlatform === PlatformLabel.DS) && {
					transform: 'translateX(70px)',
				}),
			}),
		}),
		...(!mobileUi && {
			...((boxPlatform === PlatformLabel.Psp ||
				boxPlatform === PlatformLabel.Ps2 ||
				boxPlatform === PlatformLabel.Ps5 ||
				boxPlatform === PlatformLabel.OriginalXbox ||
				boxPlatform === PlatformLabel.Xbox360) && {
				aspectRatio: '4 / 3',
			}),
		}),
		...(boxPlatform === PlatformLabel.Ps4 && {
			transform: mobileUi ? 'scale(0.97, 0.85)' : 'scaleY(0.99)',
		}),
		...(boxPlatform === PlatformLabel.Ps5 && {
			transform: 'scale(1.03, 0.95)',
			...(mobileUi && {
				transform: 'scale(0.98, 0.9)',
				...(isTablet && {
					transform: 'scale(0.96, 0.9) translateY(-10px)',
				}),
			}),
		}),
		...((boxPlatform === PlatformLabel.XboxSeriesXandS) && {
			transform: 'scale(0.99, 0.93)', 
		}),
		...((boxPlatform === PlatformLabel.Switch) && {
			transform: 'scale(0.8, 0.95)',
		}),
		...((boxPlatform === PlatformLabel.NES ||
			boxPlatform === PlatformLabel.SegaMegaDrive) && {
			transform: 'scale(1, 0.75) translateY(-70px)',
			...(!mobileUi && {
				aspectRatio: '4 / 3',
			}),
			...(mobileUi && {
				transform: 'scale(0.9, 0.55) translateY(-90px)',
				...(isTablet && {
					transform: 'scale(1, 0.55) translateY(-150px)',
				}),
			}),
		}),
		...(boxPlatform === PlatformLabel.SegaMegaDrive && {
			transform: 'scaleY(0.8)',
			...(mobileUi && {
				transform: 'scale(0.85, 0.7) translateY(-30px)',
				...(isTablet && {
					transform: 'scale(0.9, 0.8) translateY(-10px)',
				}),
			}),
		}),
		...(boxPlatform === PlatformLabel.Wii && {
			...(!mobileUi && {
				transform: 'scaleX(0.955)',
			}),
		}),
	},
	boxPlatformOverlay: {
		position: 'absolute',
		maxHeight: 650,
		top: 0,
		width: '100%',
		height: mobileUi ? 'auto' : '100%',
		objectFit: 'contain',
		pointerEvents: 'none',
		zIndex: 2,
	},
	ps1: {
		...(mobileUi) && {
			width: '150%',
			left: -15,
			maxHeight: 250,
			...(isTablet) && {
				maxHeight: 500,
				left: -20,
			},
		},
	},
	ps2: {
		maxHeight: 590,
		top: -20,
	},
	ps3: {
		maxHeight: 565,
		top: -20,
		...(mobileUi && {
			top: -18,
			...mobileHeights(isTablet, 218, 650),
		}),
	},
	ps4: {
		maxHeight: 650,
	},
	ps5: {
		maxHeight: 630,
		...(mobileUi && mobileHeights(isTablet, 350, 470)),
	},
	psp: {
		maxHeight: 620,
		top: -20,
		...(mobileUi && mobileHeights(isTablet, 350, 650)),
	},
	psVita: {
		maxHeight: 620,
		top: -20,
		...(mobileUi && {
			top: -15,
			...mobileHeights(isTablet, 350, 650),
		}),
	},
	originalXbox: {
		maxHeight: 590,
		top: -20,
	},
	xbox360: {
		maxHeight: 580,
		top: -25,
	},
	xboxOne: {
		maxHeight: 620,
		top: -25,
		...(mobileUi && {
			top: -15,
			...mobileHeights(isTablet, 350, 650),
		}),
	},
	xboxSeriesXandS: {
		maxHeight: 630,
		top: 5,
	},
	segaMegaDrive: {
		maxHeight: 750,
		...(mobileUi && mobileHeights(isTablet, 250, 550)),
	},
	wii: {
		maxHeight: 675,
	},
	switch: {
		maxHeight: 650,
		left: 3,
		...(mobileUi && mobileHeights(isTablet, 250, 500)),
	},
	nes: {
		maxHeight: 750,
		...(mobileUi && mobileHeights(isTablet, 250, 550)),
	},
	ds: {
		...(mobileUi) && {
			width: '150%',
			left: -15,
			maxHeight: 250,
			...(isTablet) && {
				maxHeight: 500,
				left: -20,
			},
		},
	},
	// pc: {
	// 	maxHeight: 250,
	// },
}));