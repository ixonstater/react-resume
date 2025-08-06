import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    dateSm: React.CSSProperties;
    impactStatement: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    dateSm?: React.CSSProperties;
    impactStatement?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    dateSm: true;
    impactStatement: true;
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
    impactStatement: {
      fontSize: "0.9rem",
      letterSpacing: "0em",
      fontStyle: "italic",
    },
    h6: {
      textTransform: "uppercase",
      fontSize: "1.3rem",
    },
  },
});
export default theme;
