import { createTheme } from "@mui/material/styles";

const PangoFont = "Pangolin, cursive";

const lightestGreen = "#DCEEC8";
const lightGreen = "#C5E2A5";
const green = "#AED681";
const darkGreen = "#9CCC65";
const darkestGreen = "#8BC44A";

export default createTheme({
  palette: {
    common: {
      lightestGreen: lightestGreen,
      lightGreen: lightGreen,
      green: green,
      darkGreen: darkGreen,
      darkestGreen: darkestGreen,
    },
    primary: {
      main: lightGreen,
    },
    secondary: {
      main: green,
    },
  },
  typography: {
    tab: {
      fontFamily: PangoFont,
      textTransform: "none",
      fontSize: "1.5rem",
      color: darkGreen,
    },
    h1: {
      fontFamily: PangoFont,
      fontSize: "4rem",
      color: darkGreen,
    },
    h2: {
      fontFamily: PangoFont,
    },
    h3: {
      fontFamily: PangoFont,
    },
    h4: {
      fontFamily: PangoFont,
      ontSize: "2em",
    },
    h5: {
      fontFamily: PangoFont,
      fontSize: "1.5em",
    },
    p: {
      fontFamily: PangoFont,
      lineHeight: "1em",
    },
    buttons: {
      fontFamily: PangoFont,
      textTransform: "none",
      color: darkestGreen,
    },
    subtitle1: {
      fontFamily: PangoFont,
      fontSize:"1.2em"
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: darkestGreen,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: darkestGreen,
          fontSize: "0.9rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          fontFamily: PangoFont,
          textTransform: "none",
          color: "#8BC44A",
          backgroundColor: "#f0defd",
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: lightestGreen,
          },
        },
      },
    },
  },
});
