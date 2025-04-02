import React, { useEffect, useState } from "react";
import { fetchCommentsByPost } from "../services/api";

interface Comment {
  id: number;
  content: string;
}

const Post: React.FC<{ postId: number }> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const getComments = async () => {
      const fetchedComments = await fetchCommentsByPost(postId);
      setComments(fetchedComments);
    };

    getComments();
  }, [postId]);

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
