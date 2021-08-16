import { Button, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../redux/actions";
import useStyles from "./styled";
import toast from "../../Snackbar";

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(AuthActions.resetUserAction());
    localStorage.removeItem("token");
    toast.success("Log Out Success!");
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      className={`buttons-container ${classes.container}`}
    >
      <Button className={`btn ${classes.btn}`}>Profile</Button>
      <Button className={`btn ${classes.btn}`} onClick={() => logOutHandler()}>
        Log Out
      </Button>
    </Grid>
  );
};

export default Auth;
