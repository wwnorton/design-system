import { createContext } from 'react';
import { LinkComponent } from './types';

export const LinkContext = createContext<LinkComponent | undefined>(undefined);
