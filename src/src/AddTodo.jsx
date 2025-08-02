import { useState } from "react";
function AddTodo(props) {
 // State to store the current task input
 const [task, setTask] = useState();
 // State to store the selected status of the task
 const [status, setStatus] = useState("Done");
 // Function to handle submission of the todo
 function onSubmit() {
 // Send the new task and status back to the parent component
 props.onSubmitTodo({ task, status });
 // Clear the input fields after submission
 setTask("");
 setStatus("Done");
 }
 return (
 <>
 <h2>This is our AddTodo Component</h2>
 <div>
 {/* Input for entering task name */}
 <input
 type="text"
 value={task}
 onChange={(e) => setTask(e.target.value)}
 placeholder="Enter Your Task"
 />
 {/* Dropdown to select the task status */}
 <select value={status} onChange={(e) => setStatus(e.target.value)}>
 <option value="Not Done">Not Done</option>
 <option value="Done">Done</option>
 <option value="Running">Running</option>
 </select>
 {/* Button to trigger the onSubmit function */}
 <button onClick={onSubmit}>Add Todo</button>
 </div>
 </>
 );
}
export default AddTodo;