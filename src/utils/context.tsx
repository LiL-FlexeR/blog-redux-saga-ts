import React from "react";
import { IPost } from "../types/posts";

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
  filteredPosts: IPost[] | null;
  setFilter: (val: IPost[] | null) => void;
  color: string;
  colorSetter: (val: string) => void;
  editForm: boolean;
  showEditForm: () => void;
  hideEditForm: () => void;
  createForm: boolean;
  showCreateForm: () => void;
  hideCreateForm: () => void;
  editPostForm: boolean;
  showEditPostForm: () => void;
  hideEditPostForm: () => void;
  post: any;
  postSetter: (val: any) => void;
  filter: string;
  filterValue: (val: string) => void;
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
  filteredPosts: [],
  setFilter: () => {},
  color: "",
  colorSetter: () => {},
  editForm: false,
  showEditForm: () => {},
  hideEditForm: () => {},
  createForm: false,
  showCreateForm: () => {},
  hideCreateForm: () => {},
  editPostForm: false,
  showEditPostForm: () => {},
  hideEditPostForm: () => {},
  post: {},
  postSetter: () => {},
  filter: "",
  filterValue: () => {},
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

  const [editForm, setEditForm] = React.useState<boolean>(false);
  const showEditForm = React.useCallback(() => setEditForm(true), []);
  const hideEditForm = React.useCallback(() => setEditForm(false), []);

  const [createForm, setcreateForm] = React.useState<boolean>(false);
  const showCreateForm = React.useCallback(() => setcreateForm(true), []);
  const hideCreateForm = React.useCallback(() => setcreateForm(false), []);

  const [editPostForm, setEditPostForm] = React.useState<boolean>(false);
  const showEditPostForm = React.useCallback(() => setEditPostForm(true), []);
  const hideEditPostForm = React.useCallback(() => setEditPostForm(false), []);

  const [filter, setFilterValue] = React.useState<string>("");
  const filterValue = React.useCallback(
    (value: string) => setFilterValue(value),
    []
  );

  const [filteredPosts, setFilteredPosts] = React.useState<IPost[] | null>(
    null
  );
  const setFilter = React.useCallback(
    (value: IPost[] | null) => setFilteredPosts(value),
    []
  );

  const [color, setColor] = React.useState<string>("");
  const colorSetter = React.useCallback((value: string) => setColor(value), []);

  const [post, setPost] = React.useState<any>();
  const postSetter = React.useCallback((values: any) => setPost(values), []);

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
        filteredPosts,
        setFilter,
        color,
        colorSetter,
        editForm,
        showEditForm,
        hideEditForm,
        createForm,
        showCreateForm,
        hideCreateForm,
        editPostForm,
        showEditPostForm,
        hideEditPostForm,
        post,
        postSetter,
        filter,
        filterValue,
      }}
      {...props}
    />
  );
};
