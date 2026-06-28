import { createContext } from 'react';

import type { DialogContextValue } from '../types/dialog.types';

export const DialogContext = createContext<DialogContextValue | null>(null);