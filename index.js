'use strict';
const express =require('express');
const app= express();
//load config from env
require('dotenv').config();
const PORT =process.env.PORT || 4000;
//middleware to parse json request body
app.use(express.json());
//import routes for todo api
const  todoRoutes = require('./routes/todos');


//mount the todo api routes


app.use("/api/v1",todoRoutes);

//start server

app.listen(PORT ,()=>{
    console.log(`Server started successfully at ${PORT}`);
})

//connect to db
const dbConnect= require('./config/database');
dbConnect();

//default routes
app.get("/",(req,res)=>{
    res.send('<h1>This is homepage body</h1>');
})