import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/ui/Theme";

import Title from "../src/components/Title";
import RecipeForm from "../src/components/RecipeForm";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Title />
      <RecipeForm />
    </ThemeProvider>
  );
}

export default App;
