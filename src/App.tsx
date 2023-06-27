import './App.css';
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { Menu, Inbox, Mail } from '@mui/icons-material';
import React from 'react';
import Sxp from './Sxp';
import theme from './Theme';

const pages = ['Contact', 'Projects', 'Resume']

function App() {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 240;


  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <Box className="AppContent">
          <AppBar position="static">
            <Toolbar variant="regular" sx={{ ml: Sxp.sp3 }}>
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { xs: 'inline-flex', sm: 'none' } }} onClick={() => setMobileOpen(!mobileOpen)}>
                <Menu />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                My Portfolio
              </Typography>
              <Box sx={{
                display: { xs: 'none', sm: 'block' },
                ml: Sxp.sp3
              }}>
                {pages.map((val) => {
                  return <Button color="inherit" key={`appbar-button-${val}`} sx={{ ml: Sxp.sp1 }}>
                    <Typography color="inherit">{val}</Typography>
                  </Button>
                })}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(!mobileOpen)}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {getDrawerContents()}
        </Drawer>
      </div >
    </ThemeProvider>
  );
}

function getDrawerContents(): JSX.Element {
  return (
    <Box sx={{ mt: Sxp.sp3 }}>
      <List>
        {pages.map((text, _) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default App;
