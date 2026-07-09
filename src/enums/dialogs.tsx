import { AddToCollection } from '../components/DialogResolver/dialogs/AddToCollection';
import { EditGameInCollection } from '../components/DialogResolver/dialogs/EditGameInCollection';

export enum Dialogs {
	AddToCollection = 'AddToCollection',
	EditGame = 'EditGame',
	DeleteGame = 'DeleteGame',
	None = 'None',
}

export const DIALOG_MAP: Partial<Record<Dialogs, React.ReactNode>> = {
	[Dialogs.AddToCollection]: <AddToCollection />,
	[Dialogs.EditGame]: <EditGameInCollection />,
	// [Dialogs.DeleteGame]: ,
	[Dialogs.None]: null,
};