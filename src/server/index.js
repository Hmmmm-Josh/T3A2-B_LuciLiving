const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true});

const PostSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Post = mongoose.model('Post', PostSchema);

app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post('/posts', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
});

app.listen(5000, () => {
  console.log("Server is running on port '5000'");
});
