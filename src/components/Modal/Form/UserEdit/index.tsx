import { Button, DialogActions, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../../../redux/actions";
import { RootState } from "../../../../types/user";

const UserEdit = () => {
  const selectCurrentUser = (state: RootState) => state.currentUser;
  const currentUser = useSelector(selectCurrentUser);
  const initialState = {
    name: currentUser.name,
  };
  const dispatch = useDispatch();

  return (
    <DialogActions>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          dispatch(
            AuthActions.patchUserAction({ userId: currentUser._id, values })
          );
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <TextField
              name="name"
              onChange={props.handleChange}
              value={props.values.name}
              placeholder="Enter Your name"
            />
            <Button type="submit">Patch</Button>
          </Form>
        )}
      </Formik>
    </DialogActions>
  );
};

export default UserEdit;
