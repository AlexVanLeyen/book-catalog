import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '1rem'
        }
      }
    }
  },
  typography: {
    h1: {
      fontSize: '2.5rem'
    }
  }

});

export default theme;
