import React from 'react';
import './styles.css'

const Button = ({ children, onClick }) => {
  return (
    <button className="addButton" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;