/** @jsx jsx */
import doczComponents from 'gatsby-theme-docz/src/components/index';
import * as ndsComponents from '@nds/react';
import { configure } from '@nds/react';
import './core.scss';

configure({ namespace: null });

export default {
	...doczComponents,
	...ndsComponents,
};
