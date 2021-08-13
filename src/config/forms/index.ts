import { IForm } from "./../../types/forms";
export const forms: IForm[] = [
  {
    type: "signUp",
    title: "Let`s Sign up !",
    button: "Sign Up",
    id: "4c870080-fc21-11eb-9a03-0242ac130003",
    fields: [
      {
        name: "name",
        placeholder: "Enter your name...",
        fieldId: "504c23a2-fc1d-11eb-9a03-0242ac130003",
      },
      {
        name: "email",
        placeholder: "Enter your email...",
        fieldId: "504c2168-fc1d-11eb-9a03-0242ac130003",
      },
      {
        name: "password",
        placeholder: "Enter your password...",
        fieldId: "4c8702a6-fc21-11eb-9a03-0242ac130003",
      },
    ],
  },
  {
    type: "signIn",
    title: "Let`s Sign in !",
    button: "Sign In",
    id: "504c26fe-fc1d-11eb-9a03-0242ac130003",
    fields: [],
  },
];
