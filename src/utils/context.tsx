import React from "react";

interface StoreContextInterface {
  modal: boolean;
  openModal: () => void;
  closeModal: () => void;
  signInFrom: boolean;
  showSignInForm: () => void;
  hideSignInForm: () => void;
  signUpFrom: boolean;
  showSignUpForm: () => void;
  hideSignUpForm: () => void;
  filterValue: string;
  setFilter: (val: string) => void;
  color: string;
  colorSetter: (val: string) => void;
}

const initialValues = {
  modal: false,
  openModal: () => {},
  closeModal: () => {},
  signUpFrom: false,
  showSignInForm: () => {},
  hideSignInForm: () => {},
  signInFrom: false,
  showSignUpForm: () => {},
  hideSignUpForm: () => {},
  filterValue: "",
  setFilter: () => {},
  color: "",
  colorSetter: () => {},
};

export const StoreContext =
  React.createContext<StoreContextInterface>(initialValues);

export const StoreProvider: React.FC = (props) => {
  const [modal, setModal] = React.useState<boolean>(false);
  const openModal = React.useCallback(() => setModal(true), []);
  const closeModal = React.useCallback(() => setModal(false), []);

  const [signUpFrom, setSignUp] = React.useState<boolean>(false);
  const showSignUpForm = React.useCallback(() => setSignUp(true), []);
  const hideSignUpForm = React.useCallback(() => setSignUp(false), []);

  const [signInFrom, setSignIn] = React.useState<boolean>(false);
  const showSignInForm = React.useCallback(() => setSignIn(true), []);
  const hideSignInForm = React.useCallback(() => setSignIn(false), []);

  const [filterValue, setFilterValue] = React.useState<string>("");
  const setFilter = React.useCallback((value) => setFilterValue(value), []);

  const [color, setColor] = React.useState<string>("");
  const colorSetter = React.useCallback((value: string) => setColor(value), []);

  return (
    <StoreContext.Provider
      value={{
        modal,
        openModal,
        signUpFrom,
        showSignInForm,
        signInFrom,
        showSignUpForm,
        closeModal,
        hideSignInForm,
        hideSignUpForm,
        filterValue,
        setFilter,
        color,
        colorSetter,
      }}
      {...props}
    />
  );
};
