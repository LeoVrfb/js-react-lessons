const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
    const handleToggle = (id) => {
        onToggleTodo(id)
    };

    const handleDelete = (id) => {
        onDeleteTodo(id)
    };
    const filteredTodos = todos.map((task) => (
        <li key={task.id}>
            <label>
                <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task.id)} />
                {task.text}
            </label>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
    ));

    return (
        <ul>
            {filteredTodos}
        </ul>
    );
};

export default TodoList;
