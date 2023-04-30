const TodoFilter = ({ filter, onSetFilter }) => {
    const handleFilterChange = (event) => {
        onSetFilter(event.target.value)
    };

    return (
        <div>
            <label>
                Filter:
                <select value={filter} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="active">Active</option>
                </select>
            </label>
        </div>
    );
};

export default TodoFilter;
