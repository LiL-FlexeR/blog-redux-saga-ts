import { Button, DialogActions, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../../redux/actions";
import { StoreContext } from "../../../../utils/context";

const PostEdit = () => {
  const { post } = React.useContext(StoreContext);
  const dispatch = useDispatch();
  const initialState = {
    title: post.title,
    description: post.description,
    fullText: "",
  };

  return (
    <DialogActions>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          dispatch(AuthActions.updatePostAction({ values, postId: post._id }));
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <TextField
              name="title"
              onChange={props.handleChange}
              value={props.values.title}
              placeholder="Title"
            />
            <TextField
              name="description"
              onChange={props.handleChange}
              value={props.values.description}
              placeholder="Description"
            />
            <TextField
              name="fullText"
              onChange={props.handleChange}
              value={props.values.fullText}
              placeholder="Full text"
            />
            <Button type="submit">Edit</Button>
          </Form>
        )}
      </Formik>
    </DialogActions>
  );
};

export default PostEdit;
