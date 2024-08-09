import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editId, setEditId] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(response => setPosts(response.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            axios.put(`http://localhost:5000/posts/${editId}`, { title, content }, {
                headers: { 'Authorization': token }
            })
                .then(response => {
                    setPosts(posts.map(post => post._id === editId ? response.data : post));
                    setEditId(null);
                    setTitle('');
                    setContent('');
                });
        } else {
            axios.post('http://localhost:5000/posts', { title, content }, {
                headers: { 'Authorization': token }
            })
                .then(response => setPosts([...posts, response.data]));
        }
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/posts/${id}`, {
            headers: { 'Authorization': token }
        })
            .then(() => setPosts(posts.filter(post => post._id !== id)));
    };

    const handleEdit = (post) => {
        setEditId(post._id);
        setTitle(post.title);
        setContent(post.content);
    };

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token');
    };

    return (
        <div className="container">
            <h1>Blog</h1>
            {token ? (
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            ) : (
                <p>Please login to manage posts.</p>
            )}
            {token && (
                <form onSubmit={handleSubmit} className="mb-3">
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">{editId ? 'Update Post' : 'Add Post'}</button>
                </form>
            )}
            <div>
                {posts.map(post => (
                    <div key={post._id} className="card mb-3">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p className="card-text">{post.content}</p>
                            {token && (
                                <>
                                    <button className="btn btn-secondary" onClick={() => handleEdit(post)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(post._id)}>Delete</button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;