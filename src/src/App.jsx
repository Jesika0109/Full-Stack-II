import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
function App() {
 // State to hold the list of todos
 const [todos, setTodos] = useState([]);
 // Function to handle submission of a new todo
 function onSubmitTodo(newTask) {
 console.log(newTask); // Log the new task received
 // Add new task to the existing todos array using spread operator
 setTodos([...todos, newTask]);
 console.log(todos); // This will log the old state due to async update
 }
 return (
 <>
 <h1>This My Todo Application</h1>
 {/* Button to reset (clear) all todos */}
 <button onClick={() => setTodos([])}>Reset</button>
 {/* Component to add a new todo, passing the handler function */}
 <AddTodo onSubmitTodo={onSubmitTodo} />
 {/* Rendering the list of todo items */}
 {
 todos.map((item, index) => (
 <TodoItem key={index} task={item.task} status={item.status} />
 ))
 }
 </>
 );
}
export default App;