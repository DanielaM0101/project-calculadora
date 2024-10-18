import React, { useState } from 'react';  
import './App.css';  

const App: React.FC = () => {  
  const [entrada, setEntrada] = useState<string>('');  
  const [resultado, setResultado] = useState<number | null>(null);  

  const numeros: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];  
  const operaciones: string[] = ['+', '-', 'x', '/', '=', 'C'];  

  const manejarClick = (valor: string) => {  
    if (valor === 'C') {  
      setEntrada('');  
      setResultado(null);  
    } else if (valor === '=') {  
      try {  
        const entradaEvaluable = entrada.replace(/x/g, '*');  
        const evaluado: number = eval(entradaEvaluable); // Eval debe manejarse con precaución.  
        setResultado(evaluado);  
      } catch {  
        setResultado(NaN);  
      }  
    } else {  
      setEntrada((prev) => prev + valor);  
    }  
  };  

  return (  
    <div className="container">  
      <div className="calculadora">  
        <h1>Calculadora</h1>  
        <div className="pantalla">{resultado !== null ? resultado.toString() : entrada || '0'}</div>  
        <div className="button-container">  
          <div className="botones-numeros">  
            {numeros.map((num) => (  
              <button key={num} onClick={() => manejarClick(num)}>  
                {num}  
              </button>  
            ))}  
          </div>  
          <div className="botones-operaciones">  
            {operaciones.map((op) => (  
              <button key={op} onClick={() => manejarClick(op)}>  
                {op}  
              </button>  
            ))}  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default App;