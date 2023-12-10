const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my Riley's backend application");
});

app.get("/riley",(req,res)=>{
    res.send("Hello Riley!");
});

app.listen(3000,()=>{
    console.log("Listening");
});