/* eslint-disable */
import { IPost } from "./../types/posts";
import React from "react";
import instance from "../utils/instance";

export const useQuery = <T>(): [(url: string) => void, boolean, T?] => {
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      await instance.get(url).then((res) => setData(res.data));
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return [fetchData, loading, data];
};
