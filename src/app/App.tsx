import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Nav } from '../components/Nav';
import { ThemeModeToggle } from '../components/ThemeModeToggle';
import { useStyles } from './styles';
import { ThemeModeProvider } from './ThemeModeProvider';

function App() {
	const { classes } = useStyles();

	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeModeProvider>
				<div className={classes.root}>
					<Nav />
					<Container className={classes.content} maxWidth='xl'>
						<ThemeModeToggle />
						<Outlet />
					</Container>
				</div>
			</ThemeModeProvider>
		</QueryClientProvider>
	);
}

export default App;
