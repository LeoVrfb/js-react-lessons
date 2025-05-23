import React, { useState } from 'react'
import ListeDeTaches from './ListeDeTaches';
import AjoutTache from './AjoutTache';
import { LesTypes } from './LesTypes';


const TacheManager = () => {

    const now = new Date();
    const newId = now.getTime().toString()

    const tasksData: LesTypes[] = [
        { id: newId, text: 'Faire les courses', completed: false },
        { id: newId, text: 'Aller à la gym', completed: true },
        { id: newId, text: 'Lire un livre', completed: false }
      ];

      const [tasks, setTasks] = useState<LesTypes[]>(tasksData);

      const handleTaskAddition = (taskText: string) => {
        const newTasks = [...tasks, { id: newId, text: taskText, completed: false }];
        setTasks(newTasks);
      };
    
      const handleTaskCompletion = (taskId: string) => {
        const updatedTasks = tasks.map(task => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        setTasks(updatedTasks);
      };
    
    
      const handleTaskDeletion = (taskId: string) => {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
      };
    
      const completedTasks = tasks.filter(task => task.completed);
  return (
    <div>
     <h1>Ma liste de tâches</h1>
      <ListeDeTaches tasks={tasks} handleTaskCompletion={handleTaskCompletion} handleTaskDeletion={handleTaskDeletion} completedTasks={completedTasks} />
      <AjoutTache handleTaskAddition={handleTaskAddition} />
    </div>
  )
}

export default TacheManager
