/* eslint-disable */
import { IPost } from "./../types/posts";
import React from "react";
import instance from "../utils/instance";

export const useQuery = <T>(url: string) => {
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      await instance.get(url).then((res) => setData(res.data));
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return {
    data,
    error,
    loading,
    setData,
  };
};
