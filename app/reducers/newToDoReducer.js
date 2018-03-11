import{ADD_NEW_TODO, UPDATE_TODO} from '../actions/NewToDo';
import {addNewTodo, updateToDo} from '../actions/NewToDo';

const intialState={
    todoItems:{

    }

    
}

const createNewToDo = (state, action) => {
    


    return {
        ...state.todoItems,
        [action.todoItem.uuid] : action.todoItem
    }
}

const updateToDoItem = (state, action) => {

    let todoItem = {
        uuid:'1',
        description:'',
        createdDate:'',
        updatedDate:'',
        isComplete:true
    }

   
    todoItem = state.todoItems[action.todoItem.uuid];
    console.log('Todo Item descri[topm] ', action.todoItem.description);
    if( action.todoItem.description){
        todoItem.description = action.todoItem.description;
    }
    if(action.todoItem.updatedDate != 'undefined')
        todoItem.updatedDate = action.todoItem.updatedDate;
    if(action.todoItem.isComplete != 'undefined') {
        todoItem.isComplete = action.todoItem.isComplete
    }    

    console.log('Todo Item ', todoItem);
    return{
        ...state.todoItems,
        [action.todoItem.uuid] : todoItem
    }

}

const reducer = (state =intialState, action) => {
    switch(action.type){
        case ADD_NEW_TODO:

            return{
                ...state,
                todoItems:{
                    ...createNewToDo(state, action)
                }
                    
            };
        case UPDATE_TODO:
            return{
                ...state,
                todoItems:{
                    ...updateToDoItem(state, action)
                }

                }
        default:{
            return state;
        }
            

    }
}

export default reducer;