function TodoItem(props) {
 // Log the props received for debugging purposes
 console.log(props);
 return (
 <div>
 <hr />
 {/* Display the task name */}
 <h3>Task: {props.task}</h3>
 {/* Display the task status */}
 <h4>Task Status: {props.status}</h4>
 <hr />
 </div>
 );
}
export default TodoItem;