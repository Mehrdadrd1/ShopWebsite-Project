import { createTheme } from "@mui/material";

const Theme = () => {
  const theme = createTheme({
    palette: {
      background: {
        paper: "#393646",
      },
      color: {
        primary: "#eeeeee",
        scondary: "#443c68",
        tertiary: "#576cbc",
        quaternary: "#9bc5ef",
      },
    },
  });

  return theme;
};

export default Theme;

// colors in palette
// #eeeeee	(238,238,238)
// #393646	(57,54,70)
// #443c68	(68,60,104)
// #576cbc	(87,108,188)
// #9bc5ef	(155,197,239)
