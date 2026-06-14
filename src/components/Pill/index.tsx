import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';

import { FLAG_MAP } from '../../enums/flags';
import { PillContainer } from '../../enums/pillContainer';
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
	triggerBox?: (platform: string | undefined) => void;
	isPlatform?: boolean;
}

export const Pill = ({ text, region, triggerBox, isPlatform = false }: IPillProps) => {
	const { classes } = useStyles({ region, isPlatform });

	return (
		<Box className={classes.root} onClick={() => { if (triggerBox) triggerBox(text);}}>
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
	triggerBox?: (platform: string | undefined) => void;
}

export const PillsContainer = ({ name, data, triggerBox }: IPillsContainer) => {
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
					} else if (name === PillContainer.Platforms) {
						return <Pill key={index} text={item.name} triggerBox={triggerBox} isPlatform />;
					}
					else {
						return <Pill key={index} text={item.name} />;
					}
				})}
			</div>
		</div>
	);
};
