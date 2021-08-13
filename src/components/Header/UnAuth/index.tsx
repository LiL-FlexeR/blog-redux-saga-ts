import { Button, Grid } from "@material-ui/core";
import React from "react";
import { StoreContext } from "../../../utils/context";
import useStyles from "./styled";

const Unauth = () => {
  const classes = useStyles();
  const { openModal, showSignUpForm, showSignInForm } =
    React.useContext(StoreContext);

  const formHandler = (type: string) => {
    openModal();
    switch (type) {
      case "SIGN_UP":
        showSignUpForm();
        break;
      case "SIGN_IN":
        showSignInForm();
        break;
      default:
        console.log(type);
    }
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      className={`buttons-container ${classes.container}`}
    >
      <Button
        className={`btn ${classes.btn}`}
        onClick={() => formHandler("SIGN_IN")}
      >
        Sign In
      </Button>
      <Button
        className={`btn ${classes.btn}`}
        onClick={() => formHandler("SIGN_UP")}
      >
        Sign Up
      </Button>
    </Grid>
  );
};

export default Unauth;
