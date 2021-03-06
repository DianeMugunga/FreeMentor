import bodyParser from "body-parser";
import userRoutes from "./server/routes/userRoute.js";
import sessionRouter from "./server/routes/sessionroute.js";
import cors from 'cors';
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");



dotenv.config({path:'./.env'});

var app = express();
app.use(cors());
app.use(bodyParser.json());


app.use ("/freementor/v1/user",userRoutes);
app.use ("/freementor/v1/session",sessionRouter);



app.use('/',(req,res)=>{
    res.status(404).send({
        status:404,
        message:"This route does not exist"
    })
})

app.get("/",function(request,response){
response.send("Hello World!")
})


const databaseUrl=process.env.DATABASE;
mongoose.connect(databaseUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("Database connected succesful"));

const port=process.env.PORT;
app.listen(port, ()=> {
    //console.log(databaseUrl);



    console.log(`server is running on port ${port}`);
})


export default app;