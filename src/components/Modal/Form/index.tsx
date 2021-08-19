import { DialogTitle, Grid } from "@material-ui/core";
import React from "react";
import { IForm } from "../../../types/forms";
import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserEdit from "./UserEdit";

const Index: React.FC<IForm> = ({ title, type }) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      direction="column"
      className="sign-up-form"
    >
      <DialogTitle>{title}</DialogTitle>
      {type === "signIn" ? (
        <SignIn />
      ) : type === "signUp" ? (
        <SignUp />
      ) : type === "edit" ? (
        <UserEdit />
      ) : type === "create" ? (
        <PostCreate />
      ) : type === "editPost" ? (
        <PostEdit />
      ) : null}
    </Grid>
  );
};

export default Index;
