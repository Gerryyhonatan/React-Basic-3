import { useMemo, useState } from "react";

const calculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
}

const ExampleUseMemo = () => {
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([]);
    const result = useMemo(() => calculation(count), [count]);

    const increment = () => {
        setCount((count) => count + 1);
    }

    const addTodo = () => {
        setTodos((todos) => [...todos, "New Todo"]);
    }

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={increment}>+</button>
            <h2>Calculation :</h2>
            <div>{result}</div>
            <hr />
            <h2>My Todos</h2>
            {todos.map((todo, index) => (
                <p key={index}>{todo}</p>
            ))}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default ExampleUseMemo