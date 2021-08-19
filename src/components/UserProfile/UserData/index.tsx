import { Button, CircularProgress, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../types/user";
import { StoreContext } from "../../../utils/context";
import { useStyles } from "./styled";
import React from "react";
import { AuthActions } from "../../../redux/actions";
import { useHistory } from "react-router-dom";

const UserData = ({ loading }: { loading: boolean }) => {
  const selectCurrentUser = (state: RootState) => state.currentUser;
  const currentUser = useSelector(selectCurrentUser);
  const classes = useStyles();
  const { showEditForm, openModal } = React.useContext(StoreContext);
  const dispatch = useDispatch();
  const history = useHistory();

  const showModalHandler = () => {
    openModal();
    showEditForm();
  };

  const deleteUserHandler = async () => {
    await dispatch(AuthActions.deleteUserAction(currentUser._id));
    dispatch(AuthActions.resetUserAction());
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <>
      {loading ? (
        <Grid container className={classes.progress}>
          <CircularProgress size="100px" />
        </Grid>
      ) : null}
      {!loading ? (
        <Grid container className={classes.tabContainer}>
          <Typography variant="h3" className={classes.title}>
            User Data
          </Typography>
          <Typography>Name: {currentUser.name}</Typography>
          <Typography>Email: {currentUser.email}</Typography>
          <Grid className={classes.buttonContainer}>
            <Button className={classes.edit} onClick={() => showModalHandler()}>
              Edit User
            </Button>
            <Button
              className={classes.delete}
              onClick={() => deleteUserHandler()}
            >
              Delete User
            </Button>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default UserData;
