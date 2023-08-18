//create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment.js');
var User = require('../models/user.js');
var Post = require('../models/post.js');
var auth = require('../middlewares/auth.js');

//create comment
router.post('/', auth, function(req, res, next) {
  var comment = new Comment({
    body: req.body.body,});});