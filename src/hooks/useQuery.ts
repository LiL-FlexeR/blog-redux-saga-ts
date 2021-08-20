/* eslint-disable */
import React from "react";
import instance from "../utils/instance";

export const useQuery = <T>() => {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const dataSetter = React.useCallback((value: any) => setData(value), []);
  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      await instance.get(url).then((res) => {
        if (res.data.data) {
          dataSetter(res.data.data);
        } else {
          dataSetter(res.data);
        }
      });
      setError(false);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  return { fetchData, loading, data, dataSetter };
};
