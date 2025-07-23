import Header from "./Header"
import Todo from "./Todo"
 
  
  function App() {
  //variable
  const name="Jesika Sobnam"
  return (
    <>
   <h1>Todo for {name}</h1>
 <Header/>
   <ul>
    <li><Todo/></li>
    <li><Todo/> </li>
    <li><Todo/> </li>
   </ul>
   </>
  )
}

export default App
