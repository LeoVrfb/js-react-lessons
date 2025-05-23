import React, { useState } from 'react';
import { LesTypes } from './LesTypes';
import Tache from './Tache';

interface TaskListProps {
    tasks: LesTypes[];
    handleTaskCompletion: (taskId: string) => void;
    handleTaskDeletion: (taskId: string) => void;
    completedTasks: LesTypes[];
}

const ListeDeTaches = ({ tasks, handleTaskCompletion, handleTaskDeletion, completedTasks }: TaskListProps) => {
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    const filteredTasks = filter === 'completed' ? completedTasks :
        filter === 'active' ? tasks.filter(task => !task.completed) :
            tasks;

    const handleFilterChange = (newFilter: 'all' | 'active' | 'completed') => {
        setFilter(newFilter);
    };

    return (
        <div>
            <div>
                <button onClick={() => handleFilterChange('all')}>All</button>
                <button onClick={() => handleFilterChange('active')}>Active</button>
                <button onClick={() => handleFilterChange('completed')}>Completed</button>
            </div>
            {filteredTasks.map(task => (
                <Tache
                    key={task.id}
                    task={task}
                    handleTaskCompletion={handleTaskCompletion}
                    handleTaskDeletion={handleTaskDeletion}
                />
            ))}
        </div>
    );
};

export default ListeDeTaches;
