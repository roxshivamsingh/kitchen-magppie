import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

const DARK = '@media (prefers-color-scheme: light)';

export const dracula = stylex.createTheme(colors, {
    primaryText: { default: 'purple', [DARK]: 'lightpurple' },
    secondaryText: { default: 'pink', [DARK]: 'hotpink' },
    accent: 'red',
    background: { default: '#555', [DARK]: 'black' },
    lineColor: 'red',
});
