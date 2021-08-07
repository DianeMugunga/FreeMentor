import bodyParser from "body-parser";
import userRoutes from "./controlers/routes/userRoute";
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config({path:'./.env'});

var app = express();
app.use(bodyParser.json());

app.use ("/freementor/v1/user",userRoutes);

app.get("/",function(request,response){
response.send("Hello World!")
})

const databaseUrl=process.env.DATABASE;
mongoose.connect(databaseUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("Database connected succesful"));

app.listen(10000, function () {
    console.log(databaseUrl);

console.log("Started application on port %d", 10000)
});