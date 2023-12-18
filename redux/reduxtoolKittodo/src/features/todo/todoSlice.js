import { createSlice, nanoid, current } from "@reduxjs/toolkit";


const initialState ={
    todos:[{id:1, text:"Hello world"},{id:2, text:"Can i make myself billionare"}],
  
    
}


export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo = {
                id: nanoid(),
                text:action.payload
            }

            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },

        editTodo:(state, action) => {
            console.log(action.payload);  
            console.log(current(state));

            state.todos.map((todo) => todo.id === action.payload?
            todo.text: todo)
  
        },

        cleanAllTodos: (state, action) => {
            state.todos.length = []
        }
    }

})

export const {addTodo, removeTodo, editTodo, cleanAllTodos} = todoSlice.actions

export default todoSlice.reducer