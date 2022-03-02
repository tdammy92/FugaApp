import * as actionTypes from './actionsTypes';
import {storeData, getData, removeData} from '../screens/utils/UseLocalStorage'

function Reducer(state, action) {
  switch (action.type) {
  
  
    case actionTypes.ADD_TODO:

      return {
        ...state,
        Todos: action.payload,
      };


    case actionTypes.EDIT_TODO:
      let UpdatedTodo = state.Todos.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            Completed: !item.Completed,
          };
        }
        return item;
      });

    

      storeData('todos',UpdatedTodo)

      return {
        ...state,
        Todos: UpdatedTodo,
      };



    case actionTypes.REMOVE_TODO:
      let Temp = [...state.Todos];

      const item = Temp.filter(todo => {
        return todo.id !== action.payload;
      });

      
      storeData('todos', item)
      return {
        ...state,
        Todos: item,
      };

    case actionTypes.CLEAR_TODOS:
      return {
        ...state,
        Todos: [],
      };

    default:
      return state;
  }
}

export default Reducer;

