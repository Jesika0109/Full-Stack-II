
import { useState } from "react";

function AddTodo(props){
    const[task,setTask]=useState()
     const [status,setStatus]=useState()
     console.log(props);

     function onSubmit(){
     props.onSubmitTodo({task,status})
     }
     return(
        <>
        <h1>This is AddTodo Compnent</h1>
        <h2>{task}</h2>
        <input type="text" onKeyUp={(e) =>setTask(e.target.value)}/>
        <select
        style={{margin:"10px"}}
        onChange={(e)=> setStatus(e.target.value)}
        >
         <option value="Done">Done</option>
          <option value="Not Done">Not Done</option>
           <option value="Running">Running</option>
        </select>
        <button type="button" onClick={onSubmit}>AddTask</button>
        </>
     )
}
export default AddTodo
