import { Button, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../../redux/actions";
import useStyles from "./styled";
import toast from "../../Snackbar";
import { Link } from "react-router-dom";
import { RootState } from "../../../types/user";

const Auth = () => {
  const selectCurrentUser = (state: RootState) => state.currentUser;
  const currentUser = useSelector(selectCurrentUser);
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
      <Link to={`/users/${currentUser._id}`} className={`btn ${classes.btn}`}>
        <Button className={`btn ${classes.btn}`}>Profile</Button>
      </Link>
      <Button className={`btn ${classes.btn}`} onClick={() => logOutHandler()}>
        Log Out
      </Button>
    </Grid>
  );
};

export default Auth;
