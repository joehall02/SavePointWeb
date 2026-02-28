import { createContext } from 'react';

import type { ThemeModeContextValue } from '../types/themeMode.types';

export const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);