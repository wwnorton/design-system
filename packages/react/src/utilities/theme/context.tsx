import { createContext } from 'react';
import { Theme } from './types';

export const ThemeContext = createContext<Theme | undefined>(undefined);
