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

export interface IPostData {
  title: string;
  description: string;
  fullText: string;
}
