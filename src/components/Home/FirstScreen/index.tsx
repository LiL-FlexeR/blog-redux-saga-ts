import React from "react";
import { Button, Container, Typography, withTheme } from "@material-ui/core";
import bcgImage from "../../../assets/png/first-screen-bcg.jpg";
import useStyles from "./styled";

const FirstScreen: React.FC<any> = ({ theme }) => {
  const classes = useStyles();

  return (
    <Container className={`first-screen-wrapper ${classes.firstScreenWrapper}`}>
      <Typography className={`first-screen-title ${classes.title}`}>
        One more blog of another one trainee
      </Typography>
      <Button className={`btn ${classes.button}`}>Join</Button>
      <img src={bcgImage} className={`bcg ${classes.bcg}`} alt="background" />
    </Container>
  );
};

export default withTheme(FirstScreen);
