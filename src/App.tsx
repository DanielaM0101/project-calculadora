// src/App.tsx
import React, { useState } from 'react';
import Display from './components/Display';
import NumberButton from './components/number-button';
import OperationButton from './components/operation-button';
import './App.css';

const App: React.FC = () => {
  const [entrada, setEntrada] = useState<string>('');
  const [resultado, setResultado] = useState<number | null>(null);

  const numeros = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  const operaciones = ['+', '-', 'x', '/', '=', 'C'];

  const manejarClick = (valor: string) => {
    if (valor === 'C') {
      setEntrada('');
      setResultado(null);
    } else if (valor === '=') {
      try {
        const entradaEvaluable = entrada.replace(/x/g, '*');

        setResultado(eval(entradaEvaluable)); // Eval debe manejarse con precaución.
      } catch {
        setResultado(NaN);
      }
    } else {
      setEntrada((prev) => prev + valor);
    }
  };

  return (
    <div className="calculadora">
      <h1 className = "name">CALCULADORA

      </h1>

      <Display valor={resultado !== null ? resultado : entrada} />
      <div className="botones-numeros">
        {numeros.map((num) => (
          <NumberButton key={num} numero={num} manejarClick={manejarClick} />
        ))}
      </div>
      <div className="botones-operaciones">
        {operaciones.map((op) => (
          <OperationButton key={op} operacion={op} manejarClick={manejarClick} />
        ))}
      </div>
    </div>
  );
};

export default App;