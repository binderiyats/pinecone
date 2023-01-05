import { useState } from "react";

export const Todo = () => {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={counter}>Count</button>
      <p>{count}</p>
    </>
  );
};
