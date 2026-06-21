const express = require('express');
const app = express();

const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', function(req, res) {
    res.send("hey");
})

app.get('/create', async function(req, res) {
    let user = await userModel.create({
        username : "nitesh",
        age : 21,
        email : "nitesh123@gmail.com"
    })
    res.send(user);
})

app.get('/post/create', async function(req, res) {
    let post = await postModel.create({
        postdata : "Making Backent Project",
        user : "6a265132d41a5a869f9218ee",
    })
    let user = await userModel.findOne({_id : "6a265132d41a5a869f9218ee"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user})
})

app.listen(3000);