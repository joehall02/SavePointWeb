import { useCallback, useState } from 'react';

import { DialogContext } from '../context/DialogContext';
import { Dialogs } from '../enums/dialogs';

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {

	const [dialog, setDialogType] = useState<Dialogs>(Dialogs.None);

	const setDialog = useCallback((dialog: Dialogs) => {
		setDialogType(dialog);
	}, []);

	return (
		<DialogContext.Provider value={{ dialog, setDialog }}>
			{children}
		</DialogContext.Provider>
	);
};