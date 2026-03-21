import { useEffect } from 'react';

/**
 * Hook to set the page title.
 * 
 * @param title - The new page title to set.
 */
export const usePageTitle = (title?: string) => {
	useEffect(() => {
		document.title = title ? `SavePoint - ${title}` : 'SavePoint';
	}, [title]);
};