import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/ui/Theme";
import {StyledEngineProvider} from "@mui/material/styles"

import Title from "../src/components/Title";
import RecipeForm from "../src/components/RecipeForm";


function App() {
  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Title />
      <RecipeForm />
    </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
