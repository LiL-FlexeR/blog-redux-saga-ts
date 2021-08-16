import { useQuery } from "./useQuery";

export const useFetchPost = <T>(postId: string) => {
  const url = `/posts/${postId}`;
  const { loading, data } = useQuery<T>(url);

  return {
    loading,
    data,
  };
};
