import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import {makeStyles} from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  recipeContainer: {
    marginBottom: "4em"
  },
  recipeCard: {
    minWidth: 800,
    maxWidth: 700,
    minHeight: 700,
    [theme.breakpoints.down("md")] : {
      minWidth: 600,
      maxWidth: 600,
    },
    [theme.breakpoints.down("sm")] : {
      minWidth: 350,
      maxWidth: 350
    },
  },
  mainTitle: {
    [theme.breakpoints.down("md")] : {
      fontSize: "1.5em"
    },
    [theme.breakpoints.down("sm")] : {
      textAlign: "center"
    },
  },
  titles: {
    [theme.breakpoints.down("sm")] : {
      fontSize:"1.3em"
    },
  },
  subTitles: {
    [theme.breakpoints.down("sm")] : {
      fontSize: "1.1em",
    },
    marginTop: "0.5em"
  }
}))

export default function Recipe({ recipeArray, ingredientsInput, recipeInput }) {
  const classes = useStyles()
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
      className={classes.recipeContainer}
    >
      <Card
      className={classes.recipeCard}
      >
        <CardContent>
          <Grid item container direction="column">
            <Typography variant="h4" className={classes.mainTitle}>
              Prompt: Write a recipe based off these Ingredients:
            </Typography>
            <br></br>
            <Typography style={{ lineHeight: "1em" }} className={classes.titles} variant="h5">
              Recipe Name:
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitles}>
              {capsRecipe}
            </Typography>
            <br></br>
            <Typography variant="h5" className={classes.titles}>Ingredients:</Typography>
            <Typography
              variant="subtitle1"
              className={classes.subTitles}
              style={{
                lineHeight: "1.7em",
                whiteSpace: "pre-line",
                marginTop: "0.5em",
              }}
            >
              {capsIngredients}
            </Typography>
            <br></br>
            <Typography variant="h5" className={classes.titles}>Instructions:</Typography>
            <Typography
              variant="subtitle1"
              className={classes.subTitles}
              style={{ lineHeight: "1.2em"}}
            >
              {instruction}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
