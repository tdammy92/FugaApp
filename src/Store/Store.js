import  {createContext, useContext} from 'react'
import { getData } from '../screens/utils/UseLocalStorage';






export const initialState = {
    gpa: [
        {
            id: "1",
            courseCode: 'CPS 301',
            unit: 3,
            grade: 5
        }
    ],
    Todos:[]
    
  
    
    ,
    GPA: null
}

// getData('todos') ||


export const Global = createContext(initialState)

export default Store = () => useContext(Global);


// [
//     {
//         id: "444",
//         title: 'Coding every day..!!',
//         Completed: true
//     }
// ]