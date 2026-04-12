import { useCallback } from 'react';
import type { SetURLSearchParams } from 'react-router-dom';

/**
 * Hook for handling query parameters from search, platform filtering, etc
 * Returns a function that takes a key and an input value to update the query params.
 * 
 * @param setQueryParams - State updater for URL query params.
 */
export const useSearchQueryParams = (setQueryParams: SetURLSearchParams): (key: string, input: string) => void => (
	useCallback((key: string, input: string): void => {
		if (key === 'search' || key === 'platform') {
			// Remove query param if it's empty
			if (!input) {
				setQueryParams(prev => (
					((next => (next.delete(key), next))(new URLSearchParams(prev)))
				));

				return;
			}

			// If search is updated, clear all query params except search
			// If platform is updated, clear all query params except platform & search
			setQueryParams(prev => 
				((next => (
					next.set(key, input),
					Array.from(next.keys()).forEach(paramKey => 
						key === 'platform' 
							? ((paramKey !== 'search' && paramKey !=='platform') && next.delete(paramKey))
							: (paramKey !== 'search' && next.delete(paramKey)),  
					), next))(new URLSearchParams(prev))),
			);
			return;
		}

		// Update queryParams with updated value if input is not empty.
		// If input is empty, remove the key from queryParams.
		setQueryParams(prev => 
			input 
				? { ...Object.fromEntries(prev), [key]: input } 
				// Immediately Invoked Function Expression (IIFE) instantly invokes
				// the function using 'new URLSearchParams(prev)' as the argument.
				// So here we define the function to delete the key, returning the new URLSearchParams object 'next'.
				// Then we invoke it immediately with the previous queryParams as the argument.
				: ((next => (next.delete(key), next))(new URLSearchParams(prev))));
	}, [setQueryParams])
);
