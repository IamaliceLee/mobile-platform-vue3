import themeGreen from './theme-green.json';
import themeRed from './theme-red.json';
import themeOrange from './theme-orange.json';

interface IVars {
  [propName: string]: string;
}

const themeConfig: { [propName: string]: IVars } = {
  default: {},
  green: themeGreen,
  red: themeRed,
  orange: themeOrange
};

export default themeConfig;
