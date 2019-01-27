import defaultTheme from './themedefault';
import clone from 'clone';

const theme = clone(defaultTheme);
theme.palette.primary = ['#f00'];
theme.palette.secondary = ['#715bd0'];
export default theme;
