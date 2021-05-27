import React from 'react';
import Task from './task';

const TaskComponent = ({ TaskComponent }) => {
  console.log(TaskComponent);

  return (
    <div>
      {TaskComponent.map(tarefa => <Task task={tarefa} />)}
    </div>
  )
};

export default TaskComponent;