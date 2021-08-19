import { Dialog } from "@material-ui/core";
import React from "react";
import { forms } from "../../config/forms";
import { StoreContext } from "../../utils/context";
import Form from "./Form";

const Modal: React.FC<any> = () => {
  const { modal, signUpFrom, signInFrom, editForm, createForm, editPostForm } =
    React.useContext(StoreContext);

  return (
    <Dialog open={!!modal}>
      {forms.map(({ type, id, title }) =>
        signUpFrom && type === "signUp" ? (
          <Form type={type} title={title} id={id} key={id} />
        ) : signInFrom && type === "signIn" ? (
          <Form type={type} title={title} id={id} key={id} />
        ) : editForm && type === "edit" ? (
          <Form type={type} title={title} id={id} key={id} />
        ) : createForm && type === "create" ? (
          <Form type={type} title={title} id={id} key={id} />
        ) : editPostForm && type === "editPost" ? (
          <Form type={type} title={title} id={id} key={id} />
        ) : null
      )}
    </Dialog>
  );
};

export default Modal;
