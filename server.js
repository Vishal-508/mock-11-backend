const express =require("express");
const { connection } = require("mongoose");
const app =express();
require("dotenv").config();

app.get("/", (req,res)=>{
    res.send("Mock 11 backend home page")
})



app.listen(process.env.PORT, async()=>{
    try{
        await connection;
        console.log("connected to DB")
    }catch(err){
        console.log("Error connecting to DB")
    }
    console.log(`listening at port ${process.env.PORT}`)
})