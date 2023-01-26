import { useState } from "react";

export default function State() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const styles = {
    wrapper: {
      minHeight: "100vh",
      maxWidth: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  };

  const handlechange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  const deleteTask = () => {};

  return (
    <div className="app" style={styles.wrapper}>
      <div className="addTask">
        <input onChange={handlechange} />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="list">
        <div>
          <ul>
            {todoList.map((task) => {
              return <li>{task}</li>;
            })}
          </ul>
          <button onClick={deleteTask}> x </button>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";

// const styles = {
//   wrapper: {
//     minHeight: "100vh",
//     maxWidth: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//   },
// };
// export default function State() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = () => {
//     const newList = [...todos, input];
//     setTodos(newList);
//     setInput("");
//   };

//   const removeByIndex = (id) => {
//     let filteredTodo = todos.filter((todo, index) => {
//       return id !== index;
//     });
//     setTodos(filteredTodo);
//   };

//   return (
//     <div style={styles.wrapper}>
//       <header>todos</header>
//       <input value={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index} onClick={() => removeByIndex(index)}>
//             {todo}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
