import React, { useEffect, useState } from "react";
import { fetchUsers, fetchPostsByUser } from "../services/api";

interface User {
  id: number;
  name: string;
  postCount: number;
}

const Analytics: React.FC = () => {
  const [topUsers, setTopUsers] = useState<User[]>([]);

  useEffect(() => {
    const getTopUsers = async () => {
      const users = await fetchUsers();
      const userPostCounts: User[] = [];

      // Fetch posts for each user and count them
      for (const id in users) {
        const userId = parseInt(id);
        const posts = await fetchPostsByUser(userId);
        userPostCounts.push({ id: userId, name: users[id], postCount: posts.length });
      }

      // Sort by post count and take the top 5 users
      const sortedUsers = userPostCounts.sort((a, b) => b.postCount - a.postCount).slice(0, 5);
      setTopUsers(sortedUsers);
    };

    getTopUsers();
  }, []);

  return (
    <div className="analytics-container">
      <h1>Top 5 Active Users</h1>
      <ul>
        {topUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.postCount} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Analytics;

