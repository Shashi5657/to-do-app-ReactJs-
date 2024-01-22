import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
let globalID = 0;

function App() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo(event) {
    event.preventDefault();

    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, {todo:task, id: globalID++}];
    });
  }

  // function tryToCheckForEnterKey(e) {
  //   if (e.keyCode === 13) {
  //     createTodo();
  //   }
  // }

  function deleteItem(itemID){
    setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
  }

  return (
    <>
      <h1>To-Do-App</h1>
      <form>
        <input
          // onKeyDown={tryToCheckForEnterKey}
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button type="submit" onClick={createTodo}>
          Create ToDo
        </button>
      </form>

      <ul>
        {todos.map((item, index) => {
          return <div  key={item.id}>
              <li>{item.todo}</li>
              <button onClick={()=> deleteItem(item.id)} >Delete</button>
            </div>
          
        })}
      </ul>
    </>
  );
}

export default App;
