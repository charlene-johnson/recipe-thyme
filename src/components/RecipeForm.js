import React, { useState } from "react";
import { Grid, Button, TextField, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";

import Recipe from "./Recipe";

const useStyles = makeStyles((theme) => ({
  recipeContainer: {
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.2em",
    },
  },
  formCard: {
    marginBottom: "4em",
    minWidth: 800,
    minHeight: 300,
    [theme.breakpoints.down("md")]: {
      minWidth: 600,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: 350,
      marginBottom: "2.5em"
    },
  },
  button : {
    width: "20em",
    padding: "1em",
    [theme.breakpoints.down("sm")] : {
      width: "15em",
      padding:"0.8em"
    }
  }
}));

export default function RecipeForm() {
  const classes = useStyles()

  const [recipeInput, setRecipeInput] = useState("");
  const [ingredientsInput, setIngredientsInput] = useState("");
  const [ingredientsList, setIngredientsList] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [recipeArray, setRecipeArray] = useState([]);

  const data = {
    prompt: `Write a recipe based on the recipe name, ingredients and instructions:Recipe name:\n\n${recipeInput}\n\nIngredients:\n\n${ingredientsInput}\n\nInstructions:`,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1.0,
  };

  async function submitHandler(e) {
    e.preventDefault();
    await axios({
      method: "post",
      url: "https://api.openai.com/v1/engines/text-curie-001/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      data: JSON.stringify(data),
    }).then((response) => {
      setRecipeArray((prev) => [
        {
          recipe: recipeInput,
          ingredients: ingredientsInput,
          instructions: response.data.choices[0].text,
        },
        ...prev,
      ]);
    });
    setRecipeName((prev) => [
      {
        recipe: recipeName,
      },
      ...prev,
    ]);
    setIngredientsList((prev) => [
      {
        ingredients: ingredientsList,
      },
      ...prev,
    ]);
    setRecipeInput("");
    setIngredientsInput("");
  }


  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.recipeContainer}
    >
      <Card className={classes.formCard} >
        <CardContent>
          <Grid item container direction="column" style={{ marginTop: "2em" }}>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: "#8BC44A" },
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "#8BC44A" },
                  },
                }}
                id="recipeInput"
                label="Enter a recipe name here"
                variant="outlined"
                value={recipeInput}
                onChange={(e) => setRecipeInput(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: "#8BC44A" },
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "#8BC44A" },
                  },
                }}
                id="ingredientInput"
                label="Enter your ingredients here"
                variant="outlined"
                helperText="Enter ingredients seperated by a comma"
                value={ingredientsInput}
                onChange={(e) => setIngredientsInput(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item container justifyContent="center">
              <Button
               className={classes.button}
                onClick={submitHandler}
                variant="contained"
              >
                See your recipe!
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {recipeArray &&
        recipeArray.map((recipes, key) => {
          return (
            <Recipe
              key={key}
              recipeInput={recipes.recipe}
              ingredientsInput={recipes.ingredients}
              recipeArray={recipes.instructions}
            />
          );
        })}
    </Grid>
  );
}
