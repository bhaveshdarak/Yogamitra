const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Route to create a new post
router.post('/posts', (req, res) => {
  const newPost = new Post(req.body);
  newPost.save((err, post) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(post);
    }
  });
});

// Route to retrieve all posts
router.get('/posts', (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(posts);
    }
  });
});

module.exports = router;
