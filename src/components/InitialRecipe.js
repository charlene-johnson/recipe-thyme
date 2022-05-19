import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function InitialRecipe() {
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
          marginBottom: "4em",
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
              Banana Pancakes
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
              Water<br></br> Banana<br></br>Flour<br></br>Milk<br></br>Vanilla
            </Typography>
            <br></br>
            <Typography variant="h5">Instructions:</Typography>
            <Typography
              variant="subtitle1"
              style={{ lineHeight: "1.2em", marginTop: "0.5em" }}
            >
              1. Preheat your oven to 350 degrees Fahrenheit.<br></br>
              <br></br>2. In a large bowl, mix together the water, banana, flour
              and milk until the mixture is a smooth paste.<br></br>
              <br></br>3. Pour the mixture into a large, nonstick skillet and
              cook over medium heat until the pancakes are golden brown and
              cooked through.<br></br>
              <br></br>4. Serve pancakes war with your favorite toppings. Enjoy!
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
