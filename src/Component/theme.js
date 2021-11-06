import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import bgImg from '../images/bg_sm.png';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      main: '#64EAEC',
      tag: '#C236F2',
      title: '#fff'
    },
    background: {
      default: 'black',
    },
  },
  background: `url(${bgImg})`
});

export default theme;
