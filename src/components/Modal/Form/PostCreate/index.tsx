import { Button, DialogActions, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../../redux/actions";
import { StoreContext } from "../../../../utils/context";

const PostCreate = () => {
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    description: "",
    fullText: "",
  };

  const { closeModal, hideCreateForm } = React.useContext(StoreContext);

  return (
    <DialogActions>
      <Formik
        initialValues={initialState}
        onSubmit={async (values) => {
          await dispatch(AuthActions.addPostAction(values));
          closeModal();
          hideCreateForm();
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <TextField
              name="title"
              onChange={props.handleChange}
              value={props.values.title}
              placeholder="Enter Your title"
            />
            <TextField
              name="description"
              onChange={props.handleChange}
              value={props.values.description}
              placeholder="Enter Your description"
            />
            <TextField
              name="fullText"
              onChange={props.handleChange}
              value={props.values.fullText}
              placeholder="Enter Your full text"
            />
            <Button type="submit">Create</Button>
          </Form>
        )}
      </Formik>
    </DialogActions>
  );
};

export default PostCreate;
