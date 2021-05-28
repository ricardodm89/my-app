import React, { useState } from 'react';
import './styles.css';
import Button from '../buttonTask/Button';

const AddTask = () => {
  const [inputData, setInputData] = useState('')

  const handlerInputChange = (e) => {
    console.log(e.target.value);
    setInputData(e.target.value);

  }

  return (
    <div className="addTaskContainer">
      <input
        onChange={handlerInputChange}
        value={inputData}
        className="addTaskInput"
        type="text"
      />
      <div className="addButtonContainer">
        <Button>Adicionar</Button>
      </div>
    </div>
  );
}

export default AddTask;
<input type="">Adicionar</input>
