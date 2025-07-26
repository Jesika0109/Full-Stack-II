//import Header from "./Header"
import AddTodo from "./AddTodo"
 
  
function App() {
function onSubmitTodo(object) {
  console.log("This is app component",object);
}
  return (
    <>
   <div>
    <AddTodo onSubmitTodo={onSubmitTodo}/>
   </div>
   </>
  )
}

export default App
