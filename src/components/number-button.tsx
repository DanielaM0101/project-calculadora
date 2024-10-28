
import React from 'react';

interface ButtonNumericProps {
  number: string;
  handleClick: (valor: string) => void;
}


const NumberButton: React.FC<ButtonNumericProps> = ({ number, handleClick }) => {
  return (
    <button className="boton" onClick={() => handleClick(number)}>
      {number}
    </button>
  );
};

export default NumberButton;
