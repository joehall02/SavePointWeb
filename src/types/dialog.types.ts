import type { Dialogs } from '../enums/dialogs';

export type DialogContextValue = { dialog: Dialogs, setDialog: (dialog: Dialogs) => void };