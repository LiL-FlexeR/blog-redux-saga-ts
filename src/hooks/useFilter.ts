import { IPost } from "../types/posts";

export const useFilter = (posts: IPost[] | undefined, search: string) => {
  if (!search) {
    return posts;
  }

  return posts
    ? posts.filter((post) => {
        const postTitle = post.title.toLowerCase();
        return postTitle.includes(search);
      })
    : [];
};
