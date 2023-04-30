import React, { useState } from 'react';
import { TaskData } from './types';
import Task from './Task';

interface TaskListProps {
    tasks: TaskData[];
    handleTaskCompletion: (taskId: string) => void;
    handleTaskDeletion: (taskId: string) => void;
    completedTasks: TaskData[];
}

const TaskList = ({ tasks, handleTaskCompletion, handleTaskDeletion, completedTasks }: TaskListProps) => {
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
                <Task
                    key={task.id}
                    task={task}
                    handleTaskCompletion={handleTaskCompletion}
                    handleTaskDeletion={handleTaskDeletion}
                />
            ))}
        </div>
    );
};

export default TaskList;
