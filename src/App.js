import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const addTask = () => {
    if (inputRef.current.value) {
      const text = inputRef.current.value;
      const newItem = { completed: false, text };
      setTodos([...todos, newItem]);
      inputRef.current.value = "";
    }
  };
  const deleteTask = (index) => {
    const newList = [...todos];
    newList.splice(index, 1);
    setTodos(newList);
  };
  const handleComplete = (index) => {
    const newList = [...todos];
    newList[index].completed = !newList[index].completed;
    setTodos(newList);
  };
  {
    return (
      <div className="App">
        <div className="h2-container">
          <h2>To Do List</h2>
        </div>
        <div className="todos">
          <ul>
            {todos.map((item, index) => {
              return (
                <div className="task">
                  <li
                    key={index}
                    className={item.completed ? "done" : ""}
                    onClick={() => handleComplete(index)}
                  >
                    {item.text}
                  </li>
                  <span onClick={() => deleteTask(index)}>❌</span>
                </div>
              );
            })}
          </ul>
          <input
            className="input"
            ref={inputRef}
            placeholder="Enter Mission...."
          />
          <button className="btn" onClick={addTask}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
export default App;
