import React from 'react';
import './styles.css';

const Task = ({ task }) => {
  return (
    <div className="taskContainer">{task.title}</div>
  );
}

export default Task;