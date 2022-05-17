const express = require("express");
const app = express();
app.use(express.json());
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://admin:123@projeto.w0occ.mongodb.net/Projeto?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const cors = require("cors");

const dbName = "Projeto"; //Colocar o nome da Base de dados em Questão
const connect = mongoose.connect(url, {
    dbName: dbName, useNewUrlParser: true, useUnifiedTopology: true
});

connect.then((db) => {

    app.use(cors(), (req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      next();
    });
    
    const login = require("./Controllers/Login");
    app.use('/login', login);

    const User = require("./Controllers/User");
    app.use('/user', User);

    const Escalas = require("./Controllers/Escalas");
    app.use('/calendario', Escalas);

    console.log("Connected correctly to server");
    
});

app.listen(port, () => console.log("Projeto Final - Marco Santos e Marco Videira "+port))

