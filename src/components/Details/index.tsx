import { Box, Typography } from '@mui/material';

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
	
	{/* Loading */}
	if (isLoading) {
		return <Loading isLoading={isLoading} />;
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
						<img className={classes.cover} src={results?.cover?.url} alt={results?.name} />
					</div>
				</div>
			
				<div className={classes.sectionOneRight}>
					{/* Info */}
					<div className={classes.info}>
						{/* Name */}
						<Typography variant='h4'>{isCollection ? results?.title : results?.name}</Typography>
						
						{/* Platforms */}
						<Typography variant='h6'>Platforms:</Typography>
						<div className={classes.pillsContainer}>
							{results?.platforms?.map((platform, index) => (
								<Pill key={index} text={platform.name} />
							))}
						</div>

						{/* Release */}
						<Typography variant='h6'>Releases:</Typography>
						<div className={classes.pillsContainer}>
							{results?.release_dates?.map((release, index) => (
								<Pill key={index} text={release.date} region={release.region} />
							))}
						</div>

						{/* Genre */}
						<Typography variant='h6'>Genres:</Typography>
						<div className={classes.pillsContainer}>
							{results?.genres?.map((genre, index) => (
								<Pill key={index} text={genre.name} />
							))}
						</div>

						{/* Summary */}
						<div className={classes.summary}>
							<Typography variant='h6'>Summary:</Typography>
							<Typography variant='body1'>{results?.summary}</Typography>
						</div>
					</div>
				</div>
			</div>
		</Box>
	);
};