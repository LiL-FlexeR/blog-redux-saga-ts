import { IPost } from "../types/posts";
import instance from "../utils/instance";
import { IUser } from "./../types/user";
import { useQuery } from "./useQuery";

export const usePost = () => {
  const { fetchData, loading, data, dataSetter } = useQuery<IPost>();

  const likeHandler = async (user: IUser) => {
    if (data) {
      await instance.put(`posts/like/${data._id}`);
      if (data && data.likes.includes(user._id)) {
        const newData = data?.likes.filter(
          (like: string) => like !== user._id && user._id
        );
        dataSetter({
          ...data,
          likes: newData,
        });
      } else {
        dataSetter({
          ...data,
          likes: [...data.likes, user._id],
        });
      }
    }
  };

  return { fetchData, loading, data, likeHandler };
};
