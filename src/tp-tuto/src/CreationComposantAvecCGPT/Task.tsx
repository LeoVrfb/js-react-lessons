import React from 'react';
import { TaskData } from './types';

interface TaskProps {
    task: TaskData;
    handleTaskCompletion: (taskId: string) => void;
    handleTaskDeletion: (taskId: string) => void;
}

const Task = ({
    task,
    handleTaskCompletion,
    handleTaskDeletion
}: TaskProps) => {
    const handleCheckboxClick = () => {
        handleTaskCompletion(task.id);
    };

    const handleDeleteClick = () => {
        handleTaskDeletion(task.id);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleCheckboxClick}
            />
            <span>{task.text}</span>
            <button onClick={handleDeleteClick}>Supprimer</button>
        </div>
    );
};

export default Task;
