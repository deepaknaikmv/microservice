const express = require('express');
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");
const { isObject } = require('util');
const { Server } = require('http');

const port = 3002;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);

app.get("/", (req, res) => {
    res.render("register");
});

app.get("/register", (req, res) => {
    res.render("register");
});


app.post("/register", async (req, res) => {
   try {

    const Password = req.body.Password;
    const CPassword = req.body.CPassword;
    if(Password === CPassword)
    {

        const registerUser = new Register({

            Name: req.body.Name,
            Age: req.body.Age,
            Email: req.body.Email,
            Pno: req.body.Pno,
            Password: req.body.Password,
            CPassword: req.body.CPassword
        })

        const registered = await registerUser.save();
        res.send("You have successfully registered to Amrita");


    }else{
        res.send("Passwords are not matching");
    }


   } catch (error){
       res.status(400).send(error);
   }
});

app.get("*", (req, res) => {
    res.send("This page does not exist");
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});