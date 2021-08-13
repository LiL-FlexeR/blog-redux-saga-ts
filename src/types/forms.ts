export interface IFields {
  name: string;
  placeholder: string;
  fieldId: string;
}

export interface IForm {
  type: string;
  title: string;
  button: string;
  id: string;
  fields: IFields[];
}
