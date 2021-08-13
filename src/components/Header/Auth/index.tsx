import { Button, Grid } from "@material-ui/core";
import useStyles from "./styled";

const Auth = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="space-between"
      className={`buttons-container ${classes.container}`}
    >
      <Button className={`btn ${classes.btn}`}>Profile</Button>
      <Button className={`btn ${classes.btn}`}>Log Out</Button>
    </Grid>
  );
};

export default Auth;
