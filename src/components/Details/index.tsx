import { Box, Typography } from '@mui/material';

import { isTypeCollection } from '../../helpers/isTypeCollection';
import type { DetailsResults } from '../../types/game.types';
import { Loading } from '../Loading';
import { useStyles } from './styles';

interface IDetailsProps {
	results?: DetailsResults;
	isLoading: boolean;
}

export const Details = ({ results, isLoading  }: IDetailsProps) => {
	
	const { classes } = useStyles();
	
	const isCollection = isTypeCollection(results);

	return (
		<Box className={classes.root}>
			{/* Loading */}
			<Loading isLoading={isLoading} />
			
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
						<Typography variant='h6'>{isCollection ? results?.title : results?.name}</Typography>

						{/* Summary */}
						<Typography variant='h6'>{results?.summary}</Typography>
						
						{/* Platforms */}
						{results?.platforms?.map((platform, index) => (
							<p key={index}>{platform.name}</p>
						))}

						{/* Release */}
						{results?.release_dates?.map((release, index) => (
							<div key={index}>
								<p>{release.date}</p>
								<p>{release.region}</p>
							</div>
						))}

						{/* Genre */}
						{results?.platforms?.map((platform, index) => (
							<p key={index}>{platform.name}</p>
						))}

					</div>
				</div>
			</div>
		</Box>
	);
};