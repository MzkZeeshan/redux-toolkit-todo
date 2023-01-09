import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

const TodoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos=[...state.todos,action.payload]
        },
        editTodo:(state,action)=>{
            state.todos[action.payload.id]=action.payload.text
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((_,index)=>index!==action.payload)
        }
    }
    
})


export const {addTodo,editTodo,deleteTodo} = TodoSlice.actions
 
export default TodoSlice.reducer