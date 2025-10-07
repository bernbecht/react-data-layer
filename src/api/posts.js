import axios from "axios";

// export async function fetchPosts() {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return response.data;
// }

export async function fetchPosts(page = 1, limit = 10 ) {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
    params: {
      _page: page,
      _limit: limit,
    },
  });
  return response.data;
}