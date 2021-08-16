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
];
