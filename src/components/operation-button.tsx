
import React from 'react';

interface ButtonOperationsProps {
  operation: string;
  handleClick: (value: string) => void;
}

const OperationButton: React.FC<ButtonOperationsProps> = ({ operation, handleClick }) => {
  return (
    <button className="boton operacion" onClick={() => handleClick(operation)}>
      {operation}
    </button>
  );
};

export default OperationButton;