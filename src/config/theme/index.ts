import { createTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  palette: {
    primary: {
      main: blue[500],
      dark: "rgb(21, 34, 56)",
    },
  },
});
