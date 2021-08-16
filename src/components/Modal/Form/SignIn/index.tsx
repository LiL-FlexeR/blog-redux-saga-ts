/* eslint-disable */
import React from "react";
import { Button, DialogActions, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../../redux/actions";
import { StoreContext } from "../../../../utils/context";

const SignIn = () => {
  const dispatch = useDispatch();
  const { closeModal, hideSignInForm } = React.useContext(StoreContext);

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <DialogActions>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dispatch(AuthActions.signInAction(values));
          closeModal();
          hideSignInForm();
        }}
        render={({ values, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <TextField
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Enter Your email"
            />
            <TextField
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Enter Your password"
            />
            <Button type="submit">Sign In</Button>
          </Form>
        )}
      />
    </DialogActions>
  );
};

export default SignIn;
