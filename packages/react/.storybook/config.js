import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import './globals.scss';

configure(require.context('../src', true, /\.stories\.tsx?$/), module);
addDecorator(withInfo);
