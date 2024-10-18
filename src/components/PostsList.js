import React, { useEffect, useState } from 'react';
import { getPosts, createPostForUser } from '../api';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ label: '', description: '' });
    const userId = 1; // ID de usuario (puedes cambiarlo o hacerlo dinámico)

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await getPosts();
        setPosts(response.data);
    };

    const handleCreatePost = async () => {
        await createPostForUser(userId, newPost);
        fetchPosts(); // Recarga los posts para incluir el nuevo
        setNewPost({ label: '', description: '' }); // Limpia el formulario
    };

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.label}</h3>
                        <p>{post.description}</p>
                    </li>
                ))}
            </ul>
            <div>
                <h2>Crear Nuevo Post</h2>
                <input
                    type="text"
                    placeholder="Título"
                    value={newPost.label}
                    onChange={(e) => setNewPost({ ...newPost, label: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={newPost.description}
                    onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                />
                <button onClick={handleCreatePost}>Crear Post</button>
            </div>
        </div>
    );
};

export default PostsList;
