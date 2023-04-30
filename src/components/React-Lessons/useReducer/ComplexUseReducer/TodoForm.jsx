import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim()) {
            onAddTodo(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
