/** @jsx jsx */
import doczComponents from 'gatsby-theme-docz/src/components/index';
import * as ndsComponents from '@wwnds/react';
import { configure } from '@wwnds/react';
import './core.scss';

configure({ namespace: null });

export default {
	...doczComponents,
	...ndsComponents,
};
