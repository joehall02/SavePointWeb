import { useContext } from 'react';

import { DialogContext } from '../context/DialogContext';
import type { DialogContextValue } from '../types/dialog.types';

export const useDialogContext = (): DialogContextValue => {
	const context = useContext(DialogContext);

	if (!context) {
		throw new Error('Must be used within a DialogProvider');
	}

	return context;
};