const Todo=require('../models/Todo');

exports.deleteTodo=async(req,res)=>{
    try {
        const result=await Todo.deleteOne(req.params);
        res.status(201).json({
            success:true,
            data:result,
            message:"Todo Deleted Successfully"
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message
        })
    }
   
}