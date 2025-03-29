import { memo, useState } from "react";

const ToDoList = memo((props) => {
  const { todos } = props;
  console.log(todos);
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={`${todo}-${index}`}>{todo}</p>;
      })}
    </>
  );
});

function ExampleMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Coding", "Sleeping"]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <>
      <ToDoList todos={todos} />
      <button onClick={() => addTodo("Gaming")}>Add Todo</button>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default ExampleMemo;
