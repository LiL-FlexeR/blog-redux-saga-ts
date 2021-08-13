import { Dialog } from "@material-ui/core";
import React from "react";
import { forms } from "../../config/forms";
import { StoreContext } from "../../utils/context";
import Form from "./Form";

// siadh
const Modal: React.FC<any> = () => {
  const { modal, signUpFrom, signInFrom } = React.useContext(StoreContext);

  return (
    <Dialog open={!!modal}>
      {forms.map(({ type, button, fields, id, title }) =>
        signUpFrom && type === "signUp" ? (
          <Form
            type={type}
            button={button}
            fields={fields}
            title={title}
            id={id}
            key={id}
          />
        ) : signInFrom && type === "signIn" ? (
          <Form
            type={type}
            button={button}
            fields={fields}
            title={title}
            id={id}
            key={id}
          />
        ) : null
      )}
    </Dialog>
  );
};

export default Modal;
