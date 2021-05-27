import React from 'react';
import './task.css';

const Task = ({ task }) => {
  return (
    <div className="taskContainer">{task.title}</div>
  );
}

export default Task;