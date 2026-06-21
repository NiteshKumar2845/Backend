const express = require('express');
const app = express();

const userModel = require('./usermodel')

app.get('/' , function(req, res){
    res.send('hi');
})

app.get('/create' , async (req, res) => {
    let createduser = await userModel.create({      // asynchronous (run latter) but we want to run earlier so looking for code for this.(so we use async and await).
        name: "Nitesh",
        email : "Nitesh@gmail.com",
        username : "NK"

    })

    res.send(createduser);
    
})

app.get('/update' , async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "NK"} , {name : "Nitesh kumar"}, {new : true})

    res.send(updateduser);
    
})

app.get('/read' , async (req, res) => {
    // let users = await userModel.find();  // read all documents(users) // give in array of documents(users)

    // let users = await userModel.findOne({username : "NK"}); // give array of documents(users) which have username NK
    let users = await userModel.findOne({username : "NK"}); // give one document(user) which have username NK (if there are multiple documents(users) with username NK then it will give first document(user) which have username NK) // give object of document(user) which have username NK

    res.send(users);
    
})

app.get('/delete' , async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "NK"});

    res.send(users);
    
})

app.listen(3000);