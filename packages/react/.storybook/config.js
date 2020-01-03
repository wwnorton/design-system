import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

configure(require.context('../src', true, /\.stories\.tsx?$/), module);
addDecorator(withInfo);
