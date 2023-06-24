//import the model
'use strict';
const Todo=require('../models/Todo')

//define route handling

exports.createTodo= async(req,res)=>{
    try{
        //extract title and description from req.body
        const {title , description}=req.body;

        //create a new todo obj and insert into DB
        const response = await Todo.create({title,description})
        //send a JSON with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message: "Entry created successfully"

            }
        );
    }catch(err){
            console.error(err);
            res.status(500).json(
                {
                    success:false,
                    data:"Internal server error",
                    message: err.message
    
                }
            );
    }
}