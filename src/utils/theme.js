import purple from '@material-ui/core/colors/purple';
import { createMuiTheme } from '@material-ui/core/styles';

// Default MUI theme
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: purple[500],
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#11cb5f',
    },
    // error: will use the default color
  },
  typography: {
    useNextVariants: true,
  },
});

// console.log('theme', theme);

export default theme;
