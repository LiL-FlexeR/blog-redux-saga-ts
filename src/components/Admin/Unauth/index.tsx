import { Avatar, Button, Grid, TextField, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./styled";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../redux/actions";

const UnauthComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
  };

  const adminData = {
    email: "123@123.co",
    password: "123123",
  };

  return (
    <Grid className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          if (
            adminData.email === values.email &&
            adminData.password === values.password
          ) {
            dispatch(AuthActions.signInAction(values));
          }
        }}
      >
        {(props) => (
          <Form
            onSubmit={props.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "flex-end",
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              value={props.values.email}
              onChange={props.handleChange}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              value={props.values.password}
              onChange={props.handleChange}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{
                width: "100px",
              }}
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default UnauthComponent;
