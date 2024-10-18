import React, { useEffect, useState } from 'react';
import { getCommentsByPost, addCommentToPost } from '../api';

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ description: '', user: { id: 1 } }); // Cambia el ID según sea necesario

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        const response = await getCommentsByPost(postId);
        setComments(response.data);
    };

    const handleAddComment = async () => {
        await addCommentToPost(postId, newComment);
        fetchComments();
        setNewComment({ description: '', user: { id: 1 } });
    };

    return (
        <div>
            <h2>Comentarios</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>{comment.description}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    placeholder="Escribe un comentario"
                    value={newComment.description}
                    onChange={(e) => setNewComment({ ...newComment, description: e.target.value })}
                />
                <button onClick={handleAddComment}>Agregar Comentario</button>
            </div>
        </div>
    );
};

export default Comments;
