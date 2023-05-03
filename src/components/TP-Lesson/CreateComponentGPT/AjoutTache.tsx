import React, { useState } from 'react';

type AddTaskProps = {
    handleTaskAddition: (taskText: string) => void;
};

const AjoutTache = ({ handleTaskAddition }: AddTaskProps) => {
    const [newTaskText, setNewTaskText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleTaskAddition(newTaskText);
        setNewTaskText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTaskText} onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    );
};

export default AjoutTache;
