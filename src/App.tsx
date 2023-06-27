
import theme from './Theme';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes';
import { ThemeProvider } from '@mui/material';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Routes}></RouterProvider>
    </ThemeProvider>
  );
}


export default App;
