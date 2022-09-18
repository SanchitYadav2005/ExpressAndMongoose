const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/farmStand")
    .then(()=>{
        console.log("database is working");
    })
    .catch((err)=>{
        console.log("there is an error");
        console.log(err)
    })
// importing the product file here.

const Product = require('./models/product')

app.listen(port, (err)=>{
    if(err){
        console.log("error");
        console.log(err);
    }else{
        console.log(`listining on the port ${port}`);
    }
})