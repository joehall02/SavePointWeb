import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, Typography } from '@mui/material';

import { isResultsNullOrUndefined } from '../../helpers/isResultsNullOrUndefined';
import { isTypeCollection } from '../../helpers/isTypeCollection';
import { useScreenDetection } from '../../hooks/useScreenDetection';
import type { DetailsResults } from '../../types/game.types';
import { ImageCarousel } from '../ImageCarousel';
import { Loading } from '../Loading';
import { PillsContainer } from '../Pill';
import { useCoverStyles, useStyles } from './styles';

interface ICoverProps {
	results?: DetailsResults;
	isMobile?: boolean;
}

const Cover = ({ results, isMobile }: ICoverProps) => {
	const { classes } = useCoverStyles({ isMobile, coverImage: results?.cover?.url });

	return (
		<div className={classes.coverContainer}>
			{results?.cover?.url ? (
				// <div className={classes.cover} aria-label={results?.name} role='img' />
				<img className={classes.cover} src={results?.cover?.url} alt={results?.name} />
			) : (
				<ImageNotSupportedIcon className={classes.cover} />
			)}
		</div>
	);
};

Cover.displayName = 'Cover';

interface IDetailsProps {
	results?: DetailsResults;
	isLoading: boolean;
}

export const Details = ({ results, isLoading }: IDetailsProps) => {
	const { isMobile } = useScreenDetection();
	const { classes } = useStyles({ isMobile });
	
	const isCollection = isTypeCollection(results);
	
	if (isLoading) {
		return <Loading isLoading={isLoading} />;
	}

	// Check if data is valid before rendering the component
	if (!results) {
		return <Typography variant='body1'>No results found</Typography>;
	}

	if (isResultsNullOrUndefined(results)) {
		return <Typography variant='body1'>Data invalid</Typography>;
	}
	return (
		<Box className={classes.root}>			
			<div className={classes.sectionOne}>
				{/* Cover Image & Image Carousel */}
				<div className={classes.sectionOneLeft}>
					{isMobile ? (
						<ImageCarousel images={results.screenshots} isMobile={isMobile} />
					) : null}
					<Cover results={results} isMobile={isMobile} />
				</div>
			
				<div className={classes.sectionOneRight}>
					{/* Info */}
					<div className={classes.info}>
						
						{/* Name */}
						<Typography variant='h4' className={classes.title}>{isCollection ? results?.title : results?.name}</Typography>
							
						{/* Platforms */}
						<PillsContainer name='Platforms' data={results?.platforms} />

						{/* Release */}
						<PillsContainer name='Releases' data={results?.release_dates} />

						{/* Genre */}
						<PillsContainer name='Genres' data={results?.genres} />

						{/* Summary */}
						{results?.summary && (
							<>
								<div>
									<Typography variant='h6'>Summary:</Typography>
									<Typography variant='body1'>{results?.summary}</Typography>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</Box>
	);
};

Details.displayName = 'Details';