import React, { useEffect, useState } from "react";
import { fetchUsers, fetchPostsByUser } from "../services/api";

interface Post {
  id: number;
  userid: number;
  content: string;
}

const Home: React.FC = () => {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getLatestPosts = async () => {
      const users = await fetchUsers();
      let allPosts: Post[] = [];

      // Fetch posts for each user and store them
      for (const id in users) {
        const userId = parseInt(id);
        const posts = await fetchPostsByUser(userId);
        allPosts = [...allPosts, ...posts];
      }

      // Sort by post ID (assuming higher ID = newer post)
      const sortedPosts = allPosts.sort((a, b) => b.id - a.id).slice(0, 5);
      setLatestPosts(sortedPosts);
    };

    getLatestPosts();
  }, []);

  return (
    <div className="home-container">
      <h1>Latest Posts</h1>
      <ul>
        {latestPosts.map((post) => (
          <li key={post.id}>
            <p>{post.content}</p>
            <small>By User ID: {post.userid}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

