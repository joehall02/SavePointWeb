import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, Typography } from '@mui/material';

import { isResultsNullOrUndefined } from '../../helpers/isResultsNullOrUndefined';
import { isTypeCollection } from '../../helpers/isTypeCollection';
import type { DetailsResults } from '../../types/game.types';
import { Loading } from '../Loading';
import { Pill } from '../Pill';
import { useStyles } from './styles';

interface IDetailsProps {
	results?: DetailsResults;
	isLoading: boolean;
}

export const Details = ({ results, isLoading }: IDetailsProps) => {
	const { classes } = useStyles();
	
	const isCollection = isTypeCollection(results);
	
	if (isLoading) {
		return <Loading isLoading={isLoading} />;
	}

	// Check if data is valid before rendering the component
	if (!results || isResultsNullOrUndefined(results)) {
		return <Typography variant='body1'>Data Invalid</Typography>;
	}

	return (
		<Box className={classes.root}>			
			{/* Image Carousel */}
			<div className={classes.imageCarousel}>

			</div>

			<div className={classes.sectionOne}>
				<div className={classes.sectionOneLeft}>

					{/* Cover Image */}
					<div className={classes.coverContainer}>
						{results?.cover?.url ? (
							<img className={classes.cover} src={results?.cover?.url} alt={results?.name} />
						) : (
							<ImageNotSupportedIcon className={classes.cover} />
						)}
					</div>
				</div>
			
				<div className={classes.sectionOneRight}>
					{/* Info */}
					<div className={classes.info}>
						
						{/* Name */}
						<Typography variant='h4' className={classes.title}>{isCollection ? results?.title : results?.name}</Typography>
							
						{/* Platforms */}
						{results?.platforms && (
							<>
								<Typography variant='h6'>Platforms:</Typography>
								<div className={classes.pillsContainer}>
									{results?.platforms?.map((platform, index) => (
										<Pill key={index} text={platform.name} />
									))}
								</div>
							</>
						)}

						{/* Release */}
						{results?.release_dates && (
							<>
								<Typography variant='h6'>Releases:</Typography>
								<div className={classes.pillsContainer}>
									{results?.release_dates?.map((release, index) => (
										<Pill key={index} text={release.date} region={release.region} />
									))}
								</div>
							</>
						)}

						{/* Genre */}
						{results?.genres && (
							<>
								<Typography variant='h6'>Genres:</Typography>
								<div className={classes.pillsContainer}>
									{results?.genres?.map((genre, index) => (
										<Pill key={index} text={genre.name} />
									))}
								</div>
							</>
						)}

						{/* Summary */}
						{results?.summary && (
							<>
								<div className={classes.summary}>
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