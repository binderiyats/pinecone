// import { useState } from "react";

// export const Todo = () => {
//   const [count, setCount] = useState(0);

//   const counter = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <button onClick={counter}>Count</button>
//       <p>{count}</p>
//     </>
//   );
// };
import { useState } from "react";

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
export default function State() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const newList = [...todos, input];
    setTodos(newList);
    setInput("");
  };

  const removeByIndex = (id) => {
    let filteredTodo = todos.filter((todo, index) => {
      return id !== index;
    });
    setTodos(filteredTodo);
  };

  return (
    <div style={styles.wrapper}>
      <header>todos</header>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => removeByIndex(index)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
