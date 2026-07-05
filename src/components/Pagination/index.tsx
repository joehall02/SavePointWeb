import { Pagination as MuiPagination } from '@mui/material';

import { useStyles } from './styles';

interface IPaginationProps {
	pages: number;
	page: number;
	handleSearch: (key: string, value: string) => void;
}

export const Pagination = ({ pages, page, handleSearch }: IPaginationProps) => {
	const { classes } = useStyles();

	return (
		<div className={classes.root}>
			<MuiPagination
				count={pages}
				page={page}
				onChange={(_, value) => handleSearch('page', value.toString())}
				size='large'
				color='primary'
			/>
		</div>
	);
};
