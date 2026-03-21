import { useMediaQuery, useTheme } from '@mui/material';

/**
 * Hook to provide boolean values for screen sizes, allowing us to
 * conditionally render elements based on the screen size.
 */
export const useScreenDetection = () => {
	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

	return {
		isMobile,
		isTablet,
		isDesktop,
	};
};