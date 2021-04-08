import { useContext } from 'react';
import { LinkContext } from './context';
import { LinkComponent } from './types';

export const useLink = (): LinkComponent | undefined => useContext(LinkContext);
