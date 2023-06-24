const Todo = require('../models/Todo');

exports.updateTodo = async (req, res) => {
    try {
        const {title,description }=req.body;
        const result = await Todo.findByIdAndUpdate(req.params,{title,description,updatedAt:Date.now()});
        res.status(201).json({
            success: true,
            data: result,
            message: "Todo Update Successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }

}