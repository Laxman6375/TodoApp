const express = require('express');
const todoModel = require("../Models/todoModel")

module.exports.getTodos = async (req, res) => {
    const todos = await todoModel.find();
    res.send(todos)
}

module.exports.saveTodo =  (req, res) => {
    const { todo } = req.body;

    todoModel
      .create({ todo })
      .then((data) => {
        console.log("Saved successfully...");
        res.status(201).send(data);
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong" });
      });
}

module.exports.updateTodo = (req, res) => {
    const { id } = req.params;
  const { todo } = req.body;

  todoModel
    .findByIdAndUpdate(id, { todo })
    .then(() => {
      res.send("Updated successfully...");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong" });
    });
};
module.exports.deleteTodo = (req, res) => {
    const { id } = req.params;

  todoModel
    .findByIdAndDelete(id)
    .then(() => {
      res.send("deleted successfully...");
    })
      .catch((err) => {
          console.log(err);
          res.send({error:err,msg:"Something went wrong"})
    });
};