import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function Recipe({recipeArray, ingredientsInput, recipeInput}) {

 
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ marginTop: "2em" }}
    >
          <Card
            sx={{
              minWidth: 800,
              maxWidth: 700,
              minHeight: 700,
              marginTop: "2em",
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
                  {recipeInput}
                </Typography>
                <br></br>
                <Typography variant="h5">Ingredients:</Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    lineHeight: "1.5em",
                    whiteSpace: "pre-line",
                    marginTop: "0.5em",
                  }}
                >
                  {ingredientsInput}
                </Typography>
                <br></br>
                <Typography variant="h5">Instructions:</Typography>
                <Typography
                  variant="subtitle1"
                  style={{ lineHeight: "1.2em", marginTop: "0.5em" }}
                >
                  {recipeArray}
                </Typography>
              </Grid>
            </CardContent>
          </Card>
    </Grid>
  );
}
