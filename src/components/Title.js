import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginTop: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5em",
    },
  },
}));

export default function Title() {
  const classes = useStyles();

  return (
    <Typography className={classes.title} variant="h1">
      Recipe Thyme!
    </Typography>
  );
}
