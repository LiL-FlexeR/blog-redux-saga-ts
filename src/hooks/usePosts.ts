import { useQuery } from "./useQuery";
import React from "react";
import instance from "../utils/instance";
import { IPost } from "../types/posts";

export const usePosts = () => {
  const { fetchData, loading, data, dataSetter } = useQuery<IPost[]>();
  console.log(data);
  const [skip, setSkip] = React.useState<number>(16);

  const loadingMorePosts = async () => {
    if (data) {
      const newSkip = skip + 16;
      setSkip(newSkip);
      await instance.get(`posts?limit=all&skip=${newSkip}`).then((res) => {
        dataSetter([...data, ...res.data.data]);
      });
    }
  };

  return { fetchData, loading, data, loadingMorePosts };
};
