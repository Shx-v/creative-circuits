import { useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { routes } from "./Route";
import { darkTheme } from "./Util/theme";

export const App = () => {
  const elements = useRoutes(routes);

  return <ThemeProvider theme={darkTheme}>{elements}</ThemeProvider>;
};

export default App;
