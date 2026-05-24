import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';

import { FLAG_MAP } from '../../enums/flags';
import { isTypeReleaseDate } from '../../helpers/isTypeReleaseDate';
import type { PillItem, Pills } from '../../types/game.types';
import { usePillsContainerStyles, useStyles } from './styles';

interface IResolverProps {
	region: string;
}

const RegionIconResolver = ({ region }: IResolverProps): ReactElement | undefined => {
	const FlagComponent = FLAG_MAP[region];

	if (!FlagComponent) return undefined;

	return <FlagComponent width={32} height={24} />;
};

interface IPillProps {
	text?: string;
	region?: string | null;
}

export const Pill = ({ text, region }: IPillProps) => {
	const { classes } = useStyles({ region });

	return (
		<Box className={classes.root}>
			<Typography variant='body2'>{text}</Typography>

			{region ? (
				<RegionIconResolver region={region} />
			) : null}
		</Box>
	);
};

interface IPillsContainer {
	name: string
	data: Pills;
}

export const PillsContainer = ({ name, data }: IPillsContainer) => {
	const { classes } = usePillsContainerStyles();

	if (!data) {
		return null;
	}

	return (
		<div className={classes.pillsContainer}>
			<Typography variant='h6'>{name}:</Typography>
			<div className={classes.pill}>
				{data?.map((item: PillItem, index) => {
					if (isTypeReleaseDate(item)) {
						return <Pill key={index} text={item.date} region={item.region} />;
					} else {
						return <Pill key={index} text={item.name} />;
					}
				})}
			</div>
		</div>
	);
};
