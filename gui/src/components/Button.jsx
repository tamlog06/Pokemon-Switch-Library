import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "green"
        }
      }
    }
  }
});

export { customTheme };
