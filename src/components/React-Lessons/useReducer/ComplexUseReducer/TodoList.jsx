const TodoList = ({ todos, onToggleTodo, onDeleteTodo, filter }) => {
    const handleToggle = (id) => {
        onToggleTodo(id)
    };

    const handleDelete = (id) => {
        onDeleteTodo(id)
    };
    const filteredTodos = todos.filter((task) => {
        if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'active') {
            return !task.completed;
        } else {
            return true;
        }
    }).map((task) => (
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
