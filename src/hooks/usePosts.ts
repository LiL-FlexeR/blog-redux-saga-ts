import { useQuery } from "./useQuery";
import React from "react";
import instance from "../utils/instance";
import { IPost } from "../types/posts";
import { IUser } from "../types/user";

export const usePosts = () => {
  const { fetchData, loading, data, dataSetter } = useQuery<IPost[]>();

  const [skip, setSkip] = React.useState<number>(16);

  const likeHandler = async (
    user: IUser,
    postId: string,
    likes: string[],
    posts: IPost | any
  ) => {
    if (posts) {
      await instance.put(`posts/like/${postId}`);
      if (likes.includes(user._id)) {
        const newData = likes.filter(
          (like: string) => like !== user._id && user._id
        );
        posts.map((post: IPost) =>
          post._id === postId ? { post, likes: newData } : post
        );
      } else {
        const newPosts = posts.map((post: IPost) =>
          post._id === postId ? { ...post, likes: [...likes, user._id] } : post
        );
        console.log("============>", newPosts);
        dataSetter(newPosts);
      }
    }
  };

  const loadingMorePosts = async () => {
    if (data) {
      const newSkip = skip + 16;
      setSkip(newSkip);
      await instance.get(`posts?limit=all&skip=${newSkip}`).then((res) => {
        dataSetter([...data, ...res.data]);
      });
    }
  };

  return { fetchData, loading, data, loadingMorePosts, likeHandler };
};
