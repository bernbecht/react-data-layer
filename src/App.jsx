import React from "react";
import { usePaginatedPosts } from "./hooks/usePaginatedPosts";

export default function App() {
  const { 
    data: posts, 
    isLoading, 
    isError, 
    error, 
    refetch,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
   } = usePaginatedPosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {posts.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map(post => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
            <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load more'
          : 'No more posts'}
      </button>
    </div>
  );
}