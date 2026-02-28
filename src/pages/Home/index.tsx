import { HomeFilled } from '@mui/icons-material';
import Button from '@mui/material/Button';

import { useStyles } from './styles';

export const Home = () => {
	const { classes } = useStyles();
	
	// const [searchTerm, setSearchTerm] = useState<string>('');

	return (
		<div>
			Home
			<Button color='primary' variant='contained' className={classes.testButton}>
				<HomeFilled />
				Click
			</Button>
		</div>
	);
};

