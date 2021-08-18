import React from "react";
import { Button, Container, Typography, withTheme } from "@material-ui/core";
import bcgImage from "../../../assets/png/first-screen-bcg.jpg";
import useStyles from "./styled";
import { StoreContext } from "../../../utils/context";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/user";

const FirstScreen: React.FC<any> = ({ theme }) => {
  const { openModal, showSignUpForm } = React.useContext(StoreContext);
  const selectCurrentUser = (state: RootState) => state.currentUser;
  const currentUser = useSelector(selectCurrentUser);
  const classes = useStyles();
  const formHandler = () => {
    openModal();
    showSignUpForm();
  };

  return (
    <Container className={`first-screen-wrapper ${classes.firstScreenWrapper}`}>
      <Typography className={`first-screen-title ${classes.title}`}>
        One more blog of another one trainee
      </Typography>
      {!currentUser._id ? (
        <Button
          onClick={() => formHandler()}
          className={`btn ${classes.button}`}
        >
          Join
        </Button>
      ) : null}

      <img src={bcgImage} className={`bcg ${classes.bcg}`} alt="background" />
    </Container>
  );
};

export default withTheme(FirstScreen);
