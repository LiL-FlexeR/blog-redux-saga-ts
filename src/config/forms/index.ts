import { IForm } from "./../../types/forms";
import { v4 as uuidv4 } from "uuid";

export const forms: IForm[] = [
  {
    type: "signUp",
    title: "Let`s Sign up !",
    id: uuidv4(),
  },
  {
    type: "signIn",
    title: "Let`s Sign in !",
    id: uuidv4(),
  },
  {
    type: "edit",
    title: "Edit user",
    id: uuidv4(),
  },
  {
    type: "create",
    title: "Create post",
    id: uuidv4(),
  },
  {
    type: "editPost",
    title: "Edit post",
    id: uuidv4(),
  },
];
