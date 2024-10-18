
import React from 'react';

interface BotonOperacionProps {
  operacion: string;
  manejarClick: (valor: string) => void;
}

const OperationButton: React.FC<BotonOperacionProps> = ({ operacion, manejarClick }) => {
  return (
    <button className="boton operacion" onClick={() => manejarClick(operacion)}>
      {operacion}
    </button>
  );
};

export default OperationButton;
