import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef();

    const addTodo = () => {
        const value = inputRef.current.value.trim();
        if (value !== '') {
            setTodos(prevTodos => [...prevTodos, value]);
            inputRef.current.value = '';
        }
    };
    const handleDeleteTask = (index) => {
        const newTasks = [...todos];
        newTasks.splice(index, 1);
        setTodos(newTasks);
    };


    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}<button onClick={() => handleDeleteTask(index)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}

export default UseRef
