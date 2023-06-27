import { createTheme } from "@mui/material";


const theme = createTheme({
    // Set spacing multiplier to 1, use breakpoints in Sxp.tsx
    spacing: 1,
    palette: {
        mode: "dark"
    },
    typography: {
        button: {
            fontSize: '0.9rem',
            letterSpacing: '0em',
            textTransform: 'none',
        },
    },
})
export default theme;