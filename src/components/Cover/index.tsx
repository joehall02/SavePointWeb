import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

import { PlatformImageClasses } from '../../enums/platformImageClasses';
import { PlatformBoxes, PlatformLabel } from '../../enums/platforms';
import type { DetailsResults } from '../../types/game.types';
import { useStyles } from './styles';

export interface ICoverProps {
	results?: DetailsResults;
	mobileUi?: boolean;
	boxPlatform?: PlatformLabel;
	isTablet?: boolean;
}

export const Cover = ({ results, mobileUi, boxPlatform, isTablet }: ICoverProps) => {
	const { classes, cx } = useStyles({ mobileUi, boxPlatform, isTablet });
	
	return (
		<div className={cx(classes.coverContainer)}>
			<div className={cx(classes.coverImageWrapper)}>
				{results?.cover?.url ? (
					<img className={cx(classes.cover)} src={results?.cover?.url} alt={results?.name} />
				) : (
					<ImageNotSupportedIcon className={classes.cover} />
				)}

				{boxPlatform && (
					<img
						className={cx(classes.boxPlatformOverlay, classes[PlatformImageClasses[boxPlatform]])}
						src={PlatformBoxes[boxPlatform]}
						alt='Platform Overlay'
					/>
				)}
			</div>
		</div>
	);
};

Cover.displayName = 'Cover';
