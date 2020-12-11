const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Name : {
        type:String,
        required:true
    },

    Age : {
        type:Number,
        required:true
    },

    Pno : {
        type:Number,
        required:true,
        unique:true
    },

    Email : {
        type:String,
        required:true,
        unique:true
    },

    Password : {
        type:String,
        required:true
    },

    CPassword : {
        type:String,
        required:true
    }
})

const Register = new  mongoose.model("Register", UserSchema);

module.exports= Register;