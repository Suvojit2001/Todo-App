'use strict';
const express =require('express');
const router= express.Router();


//import controller
const {createTodo}=require('../controllers/createTodo');
const { findTodo } = require('../controllers/getTodo');
const { findTodos } = require('../controllers/getTodo');
const { deleteTodo } = require('../controllers/deleteTodo');
const { updateTodo } = require('../controllers/updateTodo');

//define API routes


router.post("/createtodo",createTodo);
router.get('/todos',findTodos); 
router.get('/todo/:_id',findTodo);
router.delete('/todo/:_id',deleteTodo);
router.put('/todo/:_id',updateTodo);
module.exports= router ;