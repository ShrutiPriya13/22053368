import React, { useEffect, useState } from "react";
import { apiClient } from "../api/apiClient";

interface User {
    id: number;
    name: string;
    postCount: number;
}

const TopUsers: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        apiClient.get("/users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);

    return (
        <div>
            <h2>Top 5 Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.postCount} posts
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopUsers;
