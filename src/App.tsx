import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ApplicationRoutes from './ApplicationRoutes';
import AppBar from './views/components/AppBar';


const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Sk-Modernist-Mono',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'
      ].join(','),
    }
  });

function App() {
   return (
    <>
    <ThemeProvider theme={theme}>
    <AppBar/>
      <ApplicationRoutes />
    </ThemeProvider>
    </>
   );
   
}
export default App;