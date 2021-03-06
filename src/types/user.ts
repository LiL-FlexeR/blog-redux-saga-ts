import { IPost } from "./posts";

export interface IUser {
  name: string;
  _id: string;
  email: string;
  dateCreated: string;
}

export interface RootState {
  currentUser: IUser;
  posts: IPost[];
}
