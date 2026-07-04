import { Dialogs } from '../enums/dialogs';
import type { DialogMeta } from '../types/dialogMeta.types';

export const fetchDialogMeta = (dialog: Dialogs): DialogMeta => {
	switch (dialog) {
		case Dialogs.AddToCollection:
			return {
				title: 'Add To Collection',
				description: 'Enter game details',
			};
		case Dialogs.EditGame:
			return {
				title: 'Edit Game',
				description: 'Edit game details',
			};
		case Dialogs.DeleteGame:
			return {
				title: 'Delete Game',
				description: 'Are you sure you want to delete this game?',
			};
		case Dialogs.None:
		default:
			return {
				title: '',
				description: '',
			};
	}
};