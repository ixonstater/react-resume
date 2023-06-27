import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import React from 'react';
import Sxp from '../Sxp';
import { useNavigate } from 'react-router-dom';

const pages = [
    { name: 'About Me', route: '/about-me' },
    { name: 'Projects', route: '/projects' },
    { name: 'Resume', route: '/resume' }
]

export default function Page(props: { children: JSX.Element }): JSX.Element {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate()

    return (
        <div>
            <Paper elevation={16} sx={{ borderRadius: 0, position: 'static', minHeight: '100vh', minWidth: '100vw', display: 'flex', justifyContent: 'center' }}>
                <Box className="AppContent" sx={{ maxWidth: Sxp.appWidth, flexGrow: 1 }}>
                    {getAppBar(mobileOpen, setMobileOpen, navigate)}
                    {props.children}
                </Box>
            </Paper>
            {getDrawer(mobileOpen, setMobileOpen, navigate)}
        </div>
    );
}

function getAppBar(mobileOpen: boolean, setMobileOpen: Function, navigate: Function): JSX.Element {
    return (
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
                    {pages.map((page) => {
                        return <Button color="inherit" key={`appbar-button-${page.route}`} sx={{ ml: Sxp.sp1 }} onClick={() => { navigate(page.route) }}>
                            <Typography color="inherit">{page.name}</Typography>
                        </Button>
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

function getDrawer(mobileOpen: boolean, setMobileOpen: Function, navigate: Function): JSX.Element {
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
                    {pages.map((page, _) => (
                        <ListItem key={page.route} disablePadding>
                            <ListItemButton onClick={() => { navigate(page.route) }}>
                                <ListItemText primary={page.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

        </Drawer>
    );
}