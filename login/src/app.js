const express = require('express');
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");

const port = 3001;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    try{

        const Email = req.body.Email;
        const Password = req.body.Password;

        const UserEmail = await Register.findOne({Email:Email});
        
        if(UserEmail.Password === Password){
            res.send("You have successfully logged in to Amrita");
        }else{
            res.send("Invalid email or password");
        }


    }catch (error){
        res.status(400).send("Invalid email or password");
    }
});


app.get("*", (req, res) => {
    res.send("This page does not exist");
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});