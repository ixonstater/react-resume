import './App.css';
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { Menu, Inbox, Mail } from '@mui/icons-material';
import React from 'react';
import Sxp from './Sxp';
import theme from './Theme';

const pages = ['Contact', 'Projects', 'Resume']

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={16} sx={{ borderRadius: 0, position: 'static', minHeight: '100vh', minWidth: '100vw', display: 'flex', justifyContent: 'center' }}>
        <Box className="AppContent" sx={{ maxWidth: Sxp.appWidth, flexGrow: 1 }}>
          <AppBar position="static" sx={{ borderRadius: 2 }}>
            <Toolbar variant="regular" sx={{ ml: Sxp.sp3 }}>
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { xs: 'inline-flex', sm: 'none' } }} onClick={() => setMobileOpen(!mobileOpen)}>
                <Menu />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                My Portfolio
              </Typography>
              <Box sx={{
                display: { xs: 'none', sm: 'block' },
                ml: Sxp.sp4
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
      </Paper>

      {getDrawer(mobileOpen, setMobileOpen)}
    </ThemeProvider>
  );
}

function getDrawer(mobileOpen: boolean, setMobileOpen: Function): JSX.Element {
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={() => setMobileOpen(!mobileOpen)}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
      }}
    >
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

    </Drawer>
  );
}

export default App;
