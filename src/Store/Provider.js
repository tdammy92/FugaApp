import React,{useReducer} from 'react'
import {Global,initialState} from './Store'
import Reducer from './Reducer'
import * as actionTypes from './actionsTypes'


function Provider({children}) {


    const [state, dispatch] = useReducer(Reducer, initialState)



    function AddTodo(Todo) {
        dispatch({
            type:actionTypes.ADD_TODO,
            payload:Todo
        })
        
    }


   
    function changeStatus(id) {

        
        dispatch({
            type:actionTypes.EDIT_TODO,
            payload:id
        })
    }


    function RemoveTodo(id) {

    
        dispatch({
            type:actionTypes.REMOVE_TODO,
            payload:id
        })
    }

    function ClearTodos() {
        dispatch({
            type:actionTypes.CLEAR_TODOS,
            
        })
    }


   



   

    return (
        <Global.Provider value={{
           Gpa:state.gpa,
            Todos:state.Todos,
            AddTodo,
            changeStatus,
            RemoveTodo,
            ClearTodos,
          
        }}>
            {children}
        </Global.Provider>
    )
}

export default Provider;
