import { AddToCollection } from '../components/DialogResolver/dialogs/AddToCollection';
import { DeleteGameInCollection } from '../components/DialogResolver/dialogs/DeleteGameInCollection';
import { EditGameInCollection } from '../components/DialogResolver/dialogs/EditGameInCollection';

export enum Dialogs {
	AddToCollection = 'AddToCollection',
	EditGame = 'EditGame',
	DeleteGame = 'DeleteGame',
	None = 'None',
}

export const DIALOG_MAP: Record<Dialogs, React.ReactNode> = {
	[Dialogs.AddToCollection]: <AddToCollection />,
	[Dialogs.EditGame]: <EditGameInCollection />,
	[Dialogs.DeleteGame]: <DeleteGameInCollection />,
	[Dialogs.None]: null,
};