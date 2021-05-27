import React, { useState } from 'react';
import './styles.css';
import TaskComponent from '../../components/taskComponent';

const Tasks = () => {
  // const [message, setMessage] = useState('helloooo')
  const [tasks, setTasks] = useState([

    {
      id: '1',
      title: 'Estudar React',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    }
  ]);

  return (
    <div className="container">
      <TaskComponent TaskComponent={tasks} />
      {/* <p>{message}</p>
      <button onClick={() => setMessage("Funcionouuu!")}>MUDAR</button> */}


    </div>
  )
}

export default Tasks;