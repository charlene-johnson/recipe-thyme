import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function Recipe({ recipeArray, ingredientsInput, recipeInput }) {
  const instruction =
    recipeArray?.split("\n").map((str, i) => <p key={i}>{str}</p>) || [];

  const food = ingredientsInput;
  const name = recipeInput;

  function captializeRecipe(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  function capitalizeIngredients(food) {
    return food.charAt(0).toUpperCase() + food.slice(1);
  }

  const capsRecipe = name.split(" ").map(captializeRecipe).join(" ");
  const capsIngredients = food
    .split(", ")
    .map(capitalizeIngredients)
    .join("\n")
    .replace(/,/g, "");

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ marginBottom: "4em" }}
    >
      <Card
        sx={{
          minWidth: 800,
          maxWidth: 700,
          minHeight: 700,
        }}
      >
        <CardContent>
          <Grid item container direction="column">
            <Typography variant="h4">
              Prompt: Write a recipe based off these Ingredients:
            </Typography>
            <br></br>
            <Typography style={{ lineHeight: "1em" }} variant="h5">
              Recipe Name:
            </Typography>
            <Typography variant="subtitle1" style={{ marginTop: "0.5em" }}>
              {capsRecipe}
            </Typography>
            <br></br>
            <Typography variant="h5">Ingredients:</Typography>
            <Typography
              variant="subtitle1"
              style={{
                lineHeight: "1.7em",
                whiteSpace: "pre-line",
                marginTop: "0.5em",
              }}
            >
              {capsIngredients}
            </Typography>
            <br></br>
            <Typography variant="h5">Instructions:</Typography>
            <Typography
              variant="subtitle1"
              style={{ lineHeight: "1.2em", marginTop: "0.5em" }}
            >
              {instruction}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
