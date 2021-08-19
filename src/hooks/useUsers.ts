import { useQuery } from "./useQuery";
import { IPost } from "./../types/posts";
import React from "react";
import instance from "../utils/instance";

export const useUsers = () => {
  const { fetchData, loading, data } = useQuery();

  return { fetchData, loading, data };
};
