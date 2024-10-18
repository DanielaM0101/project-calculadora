import React, { useState } from 'react';  
import './App.css';  

const App: React.FC = () => {  
  const [entrada, setEntrada] = useState<string>('');  
  const [resultado, setResultado] = useState<string | null>(null);  

  const numeros: string[] = ['0', '9', '8', '7', '6', '5', '4', '3', '2', '1', '.'];  
  const operaciones: string[] = ['C', '+', '-', 'x', '/', '='];  

  const manejarClick = (valor: string) => {  
    if (valor === 'C') {  
      setEntrada('');  
      setResultado(null);  
    } else if (valor === '=') {  
      try {  
        const entradaEvaluable = entrada.replace(/x/g, '*');  
        const evaluado: string = eval(entradaEvaluable).toString();  
        setResultado(evaluado);  
      } catch {  
        setResultado('Error');  
      }  
    } else {  
      setEntrada(prev => prev + valor);  
    }  
  };  

  return (  
    <div className="container">  
      <div className="calculadora">  
        <h1>Calculadora</h1>  
        <div className="pantalla">{resultado !== null ? resultado : entrada || '0'}</div>  
        <div className="button-container">  
          <div className="botones-numeros">  
            {numeros.map((num, index) => (  
              <button key={index} onClick={() => manejarClick(num)}>  
                {num}  
              </button>  
            ))}  
          </div>  
          <div className="botones-operaciones">  
            {operaciones.map((op) => (  
              <button key={op} onClick={() => manejarClick(op)} className={op === 'C' ? 'clear' : op === '=' ? 'equal' : 'operation'}>  
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