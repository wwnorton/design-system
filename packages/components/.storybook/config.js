import { configure } from '@storybook/html';

configure(require.context('../scss', true, /\.stories\.js$/), module);
