const BASE_URL = "http://20.244.56.144/evaluation-service"; // API Base URL

// Fetch All Users
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error("Failed to fetch users");
    const data = await response.json();
    return data.users; // Returns an object mapping user IDs to names
  } catch (error) {
    console.error("Error fetching users:", error);
    return {};
  }
};

// Fetch Posts by User ID
export const fetchPostsByUser = async (userId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}/posts`);
    if (!response.ok) throw new Error("Failed to fetch posts");
    const data = await response.json();
    return data.posts; // Returns an array of posts
  } catch (error) {
    console.error(`Error fetching posts for user ${userId}:`, error);
    return [];
  }
};

// Fetch Comments by Post ID
export const fetchCommentsByPost = async (postId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    if (!response.ok) throw new Error("Failed to fetch comments");
    const data = await response.json();
    return data.comments; // Returns an array of comments
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    return [];
  }
};
