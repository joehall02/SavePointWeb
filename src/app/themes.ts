import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#2196f3',
		},
		secondary: {
			main: '#f3ebeb',
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#6a5acd',
		},
		secondary: {
			main: '#8a8484',
		},
	},
});
