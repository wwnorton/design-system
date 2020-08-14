import { useContext } from 'react';
import { Config, NDSContext } from '../config';

export const useConfig = (): Config => useContext(NDSContext);
