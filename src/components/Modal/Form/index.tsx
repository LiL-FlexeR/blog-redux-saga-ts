import { DialogTitle, Grid } from "@material-ui/core";
import React from "react";
import { IForm } from "../../../types/forms";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Index: React.FC<IForm> = ({ title, type }) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      direction="column"
      className="sign-up-form"
    >
      <DialogTitle>{title}</DialogTitle>
      {type === "signIn" ? <SignIn /> : <SignUp />}
    </Grid>
  );
};

export default Index;
