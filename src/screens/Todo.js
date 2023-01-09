import React  from "react";
import Header from "../components/Header";
import {useTodo} from "../controller/TodoController";

export default function Todo() {

    const { addTodos, editTodos, deleteTodos, todos ,setEditText,setTodoText,setIsEdit,editText,todoText,isEdit} = useTodo();

  return (
    <div>
      <Header />

      <div>
        <input
          type="text"
          placeholder="Enter Your Todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addTodos(todoText)
            setTodoText("")
          }}
        >
          Add Todo
        </button>
      </div>

      {todos.map((v,i) => (
        <h4 key={i}>
         { isEdit === i ?(
     <div>
        <input
          type="text"
          placeholder="Enter Your Todo"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            editTodos({id:isEdit,text:editText})
            setIsEdit(null)  
            setEditText("")
          }}
        >
          update
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsEdit(null)          
          }}
        >
          clear
        </button>
        </div>
         ) : <> {"=>" +v} <button onClick={()=>{
            setEditText(v)
            setIsEdit(i)}}>Edit</button>
             <button onClick={()=>{
            deleteTodos(i)}}>Delete</button>
            </>}
        </h4>
      ))}
    </div>
  );
}
