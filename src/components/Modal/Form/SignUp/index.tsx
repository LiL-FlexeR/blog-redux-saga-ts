/* eslint-disable */
import { Button, DialogActions, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../../redux/actions";
import instance from "../../../../utils/instance";

const SignUp = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <DialogActions>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await instance.post("/users", values).then((res) => {
            if (res.status === 200) {
              const userData = {
                email: values.email,
                password: values.password,
              };
              dispatch(AuthActions.signInAction(userData));
            }
          });
        }}
        render={({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <TextField
              name="name"
              onChange={handleChange}
              value={values.name}
              placeholder="Enter Your name"
            />
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

export default SignUp;
