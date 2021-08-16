import { IPost } from "./../types/posts";
import { useQuery } from "./useQuery";
import React from "react";
import instance from "../utils/instance";

export const useFetchPosts = <T>() => {
  const url = "/posts";
  const { data, error, loading, setData } = useQuery<T>(url);

  const [skip, setSkip] = React.useState(16);

  const loadMoreHandler = async () => {
    const newSkip = skip + 16;
    setSkip(newSkip);
    await instance.get(`/posts?skip=${skip}`).then((res) => {
      const newPosts = [...data, ...res.data];
      setData(newPosts);
    });
  };

  return {
    data,
    error,
    loading,
    loadMoreHandler,
  };
};
