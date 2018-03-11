export const ADD_NEW_TODO = 'ADD_NEW_TODO'

export const UPDATE_TODO = 'UPDATE_TODO'


export const addNewTodo = (todoItem) =>({
    type: ADD_NEW_TODO,
    todoItem: todoItem
})

export const updateToDo = (todoItem) =>({
    type: UPDATE_TODO,
    todoItem: todoItem
})





