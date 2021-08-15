import { IForm } from "./../../types/forms";
import { v4 as uuidv4 } from "uuid";

export const forms: IForm[] = [
  {
    type: "signUp",
    title: "Let`s Sign up !",
    button: "Sign Up",
    id: uuidv4(),
    fields: [
      {
        name: "name",
        placeholder: "Enter your name...",
        fieldId: uuidv4(),
      },
      {
        name: "email",
        placeholder: "Enter your email...",
        fieldId: uuidv4(),
      },
      {
        name: "password",
        placeholder: "Enter your password...",
        fieldId: uuidv4(),
      },
    ],
  },
  {
    type: "signIn",
    title: "Let`s Sign in !",
    button: "Sign In",
    id: uuidv4(),
    fields: [],
  },
];
