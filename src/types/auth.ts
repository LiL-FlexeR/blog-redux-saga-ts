export interface IAuth {
  token: string;
}

export interface ISignUp {
  _id: string;
  name: string;
  email: string;
  dateCreated: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}

export interface IAction {
  type: string;
  payload: IToken | ILoginData;
}
