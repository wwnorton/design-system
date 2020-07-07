import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { configure } from '../src';
import './globals.scss';

configure({ namespace: null });

addDecorator(withInfo);
addDecorator(withA11y);
