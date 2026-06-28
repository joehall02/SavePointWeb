import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { DialogResolver } from '../components/DialogResolver';
import { Nav } from '../components/Nav';
import { ThemeModeToggle } from '../components/ThemeModeToggle';
import { DialogProvider } from './DialogProvider';
import { useStyles } from './styles';
import { ThemeModeProvider } from './ThemeModeProvider';

function App() {
	const { classes } = useStyles();

	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeModeProvider>
				<DialogProvider>
					<div className={classes.root}>
						<Nav />
						<DialogResolver />
						<Container className={classes.content} maxWidth='xl'>
							<ThemeModeToggle />
							<Outlet />
						</Container>
					</div>
				</DialogProvider>
			</ThemeModeProvider>
		</QueryClientProvider>
	);
}

export default App;
