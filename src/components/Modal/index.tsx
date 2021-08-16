import { Dialog } from "@material-ui/core";
import React from "react";
import { forms } from "../../config/forms";
import { StoreContext } from "../../utils/context";
import Form from "./Form";

const Modal: React.FC<any> = () => {
  const { modal, signUpFrom, signInFrom } = React.useContext(StoreContext);

  return (
    <Dialog open={!!modal}>
      {forms.map(({ type, id, title }) =>
        signUpFrom && type === "signUp" ? (
          <Form type={type} title={title} id={id} key={id} />
        ) : signInFrom && type === "signIn" ? (
          <Form type={type} title={title} id={id} key={id} />
        ) : null
      )}
    </Dialog>
  );
};

export default Modal;
