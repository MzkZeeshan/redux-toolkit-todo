import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "../store/slices/TodoSlice";
import { useState } from "react";

export const useTodo = () => {
  let [todoText, setTodoText] = useState("");
  let [isEdit, setIsEdit] = useState(null);
  let [editText, setEditText] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.TodoSlice.todos);
  const addTodos = (todo) => {
    dispatch(addTodo(todo));
  };
  const editTodos = (todo) => {
    dispatch(editTodo(todo));
  };
  const deleteTodos = (todo) => {
    dispatch(deleteTodo(todo));
  };

  return {
    todos,
    editTodos,
    addTodos,
    deleteTodos,
    todoText,
    setTodoText,
    isEdit,
    setEditText,
    setIsEdit,
    editText,
  };
};
