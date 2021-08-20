export interface IPost {
  _id: string;
  title: string;
  description: string;
  likes: string[];
  image: string;
  fullText: string;
  postedBy: string;
  dateCreated: string;
  data?: IPost[] | null;
}

export interface IPagination {
  limit: string;
  skip: string;
  total: string;
}

export interface IPostData {
  data: IPost[];
  pagination: IPagination;
}
