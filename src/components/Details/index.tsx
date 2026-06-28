import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Typography } from '@mui/material';
import { useCallback, useState } from 'react';

import { Dialogs } from '../../enums/dialogs';
import { PillContainer } from '../../enums/pillContainer';
import { PlatformBoxes, PlatformLabel } from '../../enums/platforms';
import { isResultsNullOrUndefined } from '../../helpers/isResultsNullOrUndefined';
import { isTypeCollection } from '../../helpers/isTypeCollection';
import { useDialogContext } from '../../hooks/useDialogContext';
import { useScreenDetection } from '../../hooks/useScreenDetection';
import type { DetailsResults } from '../../types/game.types';
import { Cover } from '../Cover';
import ExpandableText from '../ExpandableText';
import { Loading } from '../Loading';
import { MediaCarousel } from '../MediaCarousel';
import { PillsContainer } from '../Pill';
import { useStyles } from './styles';

interface IDetailsProps {
	results?: DetailsResults;
	isLoading: boolean;
}

export const Details = ({ results, isLoading }: IDetailsProps) => {
	const { isMobile, isTablet  } = useScreenDetection();
	const mobileUi = isMobile || isTablet;
	
	const { classes, cx } = useStyles({ mobileUi });

	const [boxPlatform, setBoxPlatform] = useState<PlatformLabel>();
	
	const isCollection = isTypeCollection(results);

	const { setDialog } = useDialogContext();

	const triggerBox = useCallback((platform: string | undefined) => {
		// Check platform is truthy and platform box cover is supported
		if (!platform || !Object.keys(PlatformBoxes).includes(platform)) return;

		if (platform === boxPlatform) {
			setBoxPlatform(undefined);
			return;
		}

		setBoxPlatform(platform as PlatformLabel);
	}, [boxPlatform]);

	if (isLoading) {
		return <Loading isLoading={isLoading} />;
	}

	if (!results) {
		return <Typography variant='body1'>No results found</Typography>;
	}
	
	// Check if data is valid before rendering the component
	if (isResultsNullOrUndefined(results)) {
		return <Typography variant='body1'>Data invalid</Typography>;
	}

	return (
		<Box className={classes.root}>			
			{/* Section One */}
			<div className={classes.sectionOne}>
				{/* Cover Image & Image Carousel */}
				<div className={classes.sectionOneLeft}>
					<MediaCarousel media={results?.screenshots} isMobile={mobileUi} />
					<Cover results={results} mobileUi={mobileUi} boxPlatform={boxPlatform} isTablet={isTablet} />
				</div>
			
				<div className={classes.sectionOneRight}>
					{/* Name */}
					<Typography 
						variant={mobileUi ? 'h4' : 'h3'} 
						className={classes.title}
					>
						{isCollection ? results?.title : results?.name}
					</Typography>

					{/* Info */}
					<div className={classes.info}>
						
						{/* Platforms */}
						{results?.platforms?.length !== 0 && (
							<PillsContainer name={PillContainer.Platforms} data={results?.platforms} triggerBox={triggerBox} />
						)}

						{/* Release */}
						{results?.release_dates?.length !== 0 && (
							<PillsContainer name={PillContainer.Releases} data={results?.release_dates} />
						)}

						{/* Genre */}
						{results?.genres?.length !== 0 && (
							<PillsContainer name={PillContainer.Genres} data={results?.genres} />
						)}

						{/* Summary */}
						{results?.summary && (
							<>
								<div>
									<Typography className={classes.text} variant='h6'>Summary:</Typography>
									<ExpandableText text={results?.summary} limit={550} />
								</div>
							</>
						
						)}

						{isCollection ? (
							<p>Collection buttons</p>
						) : (
							<Button 
								variant='contained'
								size='large'
								startIcon={<AddIcon />}
								onClick={() => setDialog(Dialogs.AddToCollection)}
							>
								Add to collection
							</Button>
						)}
					</div>
				</div>
			</div>

			{/* Section Two */}
			<div className={classes.sectionTwo}>
				<div className={cx(classes.mediaContainer, classes.mediaContainerSmall)}>
					<MediaCarousel 
						media={results?.videos}
						isMobile={mobileUi} 
						isVideo
						showBorder
					/>
				</div>
				<Box className={classes.storyline}>
					<Typography variant='h6' className={classes.text}>Storyline:</Typography>
					{results?.storyline ? (
						<>
							<ExpandableText text={results?.storyline} limit={900} />
						</>
					) : (
						<Typography variant='body1'>N/A</Typography>
					)}
				</Box>
			</div>

			{/* Section Three */}
			<div className={classes.sectionTwo}>
				{!mobileUi && (
					<div className={classes.mediaContainer}>
						<MediaCarousel 
							media={results?.screenshots}
							isMobile={mobileUi}
							showBorder
						/>
					</div>
				)}
			</div>
		</Box>
	);
};

Details.displayName = 'Details';