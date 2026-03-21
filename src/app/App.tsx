import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Nav } from '../components/Nav';
import { ThemeModeToggle } from '../components/ThemeModeToggle';
import { useStyles } from './styles';
import { ThemeModeProvider } from './ThemeModeProvider';

function App() {
	const { classes } = useStyles();

	return (
		<ThemeModeProvider>
			<div className={classes.root}>
				<Nav />
				<Container className={classes.content} maxWidth='xl'>
					<ThemeModeToggle />
					<Outlet />
				</Container>
			</div>
		</ThemeModeProvider>
	);
}

export default App;
