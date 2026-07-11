import { useCallback, useState } from 'react';

import { getLocalStorageItem, setLocalStorageItem } from '../helpers/localStorage';
import type { LayoutType } from '../types/layout.types';

/**
 * Manages the layout type (grid/list) with localStorage persistence.
 * @returns `layoutType` - the current layout, and `handleLayoutToggle` - a callback to update it.
 */
export const useLayoutToggle = () => {
	const [layoutType, setLayoutType] = useState<LayoutType>(
		getLocalStorageItem<LayoutType>('layoutType', 'grid'),
	);

	const handleLayoutToggle = useCallback((input: LayoutType) => {
		setLocalStorageItem('layoutType', input);
		setLayoutType(input);
	}, []);

	return { layoutType, handleLayoutToggle };
};
