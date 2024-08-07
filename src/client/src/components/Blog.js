import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('httpL//localhost:5000/posts')
    .then(response => setPosts(response.data));
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/posts', {title, content})
      .then(response => setPosts([...posts, response.data]));
  };
  
  return (
    <div>
        <h1>LuciLiving</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          <button type='submit'>Add Post</button>
        </form>
        <div>
          {posts.map(post => (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Blog;