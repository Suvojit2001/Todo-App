const Todo=require('../models/Todo');

exports.findTodos=async(req,res)=>{
    try {
        const result=await Todo.find();
        res.status(201).json({
            success:true,
            data:result,
        
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message
        })
    }
   
}


exports.findTodo=async(req,res)=>{
    try {
        const result=await Todo.findOne(req.params);
        if(!result){
            res.status(404).json({
                success:false,
                message:"No Data Found With Given Id",
               
            })
        }
        res.status(201).json({
            success:true,
            data:result,
        
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message
        })
    }
   
}