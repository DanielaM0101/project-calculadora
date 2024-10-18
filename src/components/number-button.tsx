
import React from 'react';

interface BotonNumericoProps {
  numero: string;
  manejarClick: (valor: string) => void;
}


const NumberButton: React.FC<BotonNumericoProps> = ({ numero, manejarClick }) => {
  return (
    <button className="boton" onClick={() => manejarClick(numero)}>
      {numero}
    </button>
  );
};

export default NumberButton;
