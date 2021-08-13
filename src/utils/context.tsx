import React from "react";

interface StoreContextInterface {
  modal: boolean;
  openModal: () => void;
  signUpFrom: boolean;
  showSignInForm: () => void;
  signInFrom: boolean;
  showSignUpForm: () => void;
}

const initialValues = {
  modal: false,
  openModal: () => {},
  signUpFrom: false,
  showSignInForm: () => {},
  signInFrom: false,
  showSignUpForm: () => {},
};

export const StoreContext =
  React.createContext<StoreContextInterface>(initialValues);

export const StoreProvider: React.FC = (props) => {
  const [modal, setModal] = React.useState<boolean>(false);
  const openModal = React.useCallback(() => setModal(true), []);

  const [signUpFrom, setSignUp] = React.useState<boolean>(false);
  const showSignUpForm = React.useCallback(() => setSignUp(true), []);

  const [signInFrom, setSignIn] = React.useState<boolean>(false);
  const showSignInForm = React.useCallback(() => setSignIn(true), []);

  return (
    <StoreContext.Provider
      value={{
        modal,
        openModal,
        signUpFrom,
        showSignInForm,
        signInFrom,
        showSignUpForm,
      }}
      {...props}
    />
  );
};
