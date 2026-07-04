import { AddToCollection } from '../components/DialogResolver/dialogs/AddToCollection';

export enum Dialogs {
	AddToCollection = 'AddToCollection',
	EditGame = 'EditGame',
	DeleteGame = 'DeleteGame',
	None = 'None',
}

export const DIALOG_MAP: Partial<Record<Dialogs, React.ReactNode>> = {
	[Dialogs.AddToCollection]: <AddToCollection />,
	// [Dialogs.EditGame]: ,
	// [Dialogs.DeleteGame]: ,
	[Dialogs.None]: null,
};