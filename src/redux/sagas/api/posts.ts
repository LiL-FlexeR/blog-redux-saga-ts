import { IPost, IPostData } from "./../../../types/posts";
import instance from "../../../utils/instance";

export const createPost = async (values: IPostData) => {
  const res = await instance.post("/posts", values);
  const data = res.data;
  return data;
};

export const fetchPosts = async (userId: string) => {
  const res = await instance.get(`posts?postedBy=${userId}`);
  const data = res.data;
  return data;
};

export const deletePost = async (postId: string) => {
  const res = await instance.delete(`/posts/${postId}`);
  const data = res.data;
  return data;
};

export const patchPost = async ({
  values,
  postId,
}: {
  values: IPost;
  postId: string;
}) => {
  const res = await instance.patch(`/posts/${postId}`, values);
  const data = res.data;
  return data;
};
