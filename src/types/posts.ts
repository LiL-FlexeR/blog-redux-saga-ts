export interface IPost {
  _id: string;
  title: string;
  description: string;
  likes: string[];
  image: string;
  fullText: string;
  postedBy: string;
  dateCreated: string;
}

export interface IPostData {
  data: [];
  error: boolean;
  loading: boolean;
  setData: () => void;
}
