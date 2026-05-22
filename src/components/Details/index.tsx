import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, Typography } from '@mui/material';

import { isResultsNullOrUndefined } from '../../helpers/isResultsNullOrUndefined';
import { isTypeCollection } from '../../helpers/isTypeCollection';
import { isTypeReleaseDate } from '../../helpers/isTypeReleaseDate';
import type { DetailsResults, PillItem, Pills } from '../../types/game.types';
import { Loading } from '../Loading';
import { Pill } from '../Pill';
import { useStyles } from './styles';

interface IDetailsProps {
	results?: DetailsResults;
	isLoading: boolean;
}

interface IPillsContainer {
	name: string
	data: Pills;
}

const PillsContainer = ({ name, data }: IPillsContainer) => {
	const { classes } = useStyles();

	if (!data) {
		return null;
	}

	return (
		<>
			<Typography variant='h6'>{name}:</Typography>
			<div className={classes.pillsContainer}>
				{data?.map((item: PillItem, index) => {
					if (isTypeReleaseDate(item)) {
						return <Pill key={index} text={item.date} region={item.region} />;
					} else {
						return <Pill key={index} text={item.name} />;
					}
				})}
			</div>
		</>
	);
};

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