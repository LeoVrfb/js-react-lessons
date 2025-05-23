import React from 'react';
import { LesTypes } from './LesTypes';

interface TaskProps {
    task: LesTypes;
    handleTaskCompletion: (taskId: string) => void;
    handleTaskDeletion: (taskId: string) => void;
}

const Tache = ({
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

export default Tache;
