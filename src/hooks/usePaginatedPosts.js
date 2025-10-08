import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/posts.js";

export function usePaginatedPosts() {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, 10),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) {
        return undefined; // No more pages
      }
      return allPages.length + 1; // Next page number
    },
  });
}