import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';

import { FLAG_MAP } from '../../enums/flags';
import { useStyles } from './styles';

interface IPillProps {
	text?: string;
	region?: string | null;
}

interface IResolverProps {
	region: string;
}

const RegionIconResolver = ({ region }: IResolverProps): ReactElement | undefined => {
	const FlagComponent = FLAG_MAP[region];

	if (!FlagComponent) return undefined;

	return <FlagComponent width={32} height={24} />;
};

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