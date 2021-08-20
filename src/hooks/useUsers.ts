import { IUser } from "./../types/user";
import { useQuery } from "./useQuery";

export const useUsers = () => {
  const { fetchData, loading, data } = useQuery<IUser[]>();

  return { fetchData, loading, data };
};
