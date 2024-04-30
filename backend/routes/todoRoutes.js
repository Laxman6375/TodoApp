const { Router } = require("express");
const { getTodos,saveTodo, updateTodo, deleteTodo } = require("../Controller/todoController");
const router = Router()

router.get("/get", getTodos);
router.post("/save", saveTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;