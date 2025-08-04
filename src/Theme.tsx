import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    dateSm: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    dateSm?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    dateSm: true;
    h3: false;
  }
}

const theme = createTheme({
  // Set spacing multiplier to 1, use breakpoints in Sxp.tsx
  spacing: 1,
  palette: {
    mode: "dark",
  },
  typography: {
    button: {
      fontSize: "0.9rem",
      letterSpacing: "0em",
      textTransform: "none",
    },
    dateSm: {
      fontSize: "0.8rem",
      letterSpacing: "0em",
      textTransform: "none",
    },
  },
});
export default theme;
