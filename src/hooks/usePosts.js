import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/posts";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}