# Simulador de Calculadora

- **Habilidades**:
### 1) **Escribir tu primer componente de React**: Crear un componente `Pantalla` para mostrar los números y resultados de la calculadora.

**Código de Implementación:**
```typescript
// src/components/Display.tsx
import React from 'react';

interface ScreenProps {
  value: string | number;
}

const Display: React.FC<ScreenProps> = ({ value }) => {
  return <div className="pantalla">{value}</div>;
};

export default Display; 
```

**Explicación:**

**¿Qué hace?**: Crea un componente reutilizable para mostrar valores en la calculadora

**¿Cómo cumple el requisito?**: Acepta un prop value de tipo string o número.
Renderiza el valor dentro de un div con clase "pantalla".

**¿Por qué es la mejor forma de  implementarlo?**:

- Componente simple y desacoplado

- Usa TypeScript para tipado seguro

- Fácilmente personalizable y reutilizable

### 2) **Crear archivos con múltiples componentes**: Crear componentes para cada botón numérico y de operaciones.
  
**Código de Implementación:**
```typescript
// src/components/number-button.tsx
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

// src/components/operation-button.tsx
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
```
**Explicación**:

**¿Qué hace?**: Crea componentes específicos para botones numéricos y de operación.

**¿Cómo cumple el requisito?**:

- Separa la lógica de renderizado de botones

- Permite reutilización y mantenimiento más sencillo

**¿Por qué es la mejor implementación?**:

- Principio de responsabilidad única
- Código más modular y legible
- Facilita futuras extensiones

### 3) **Añadir marcado a JavaScript con JSX**: Usar JSX para estructurar los botones y la pantalla de la calculadora.
  
**Código de Implementación:**
```typescript
  // src/App.tsx
return (  
  <div className="container">  
    <div className="calculadora">  
      <h1>Calculadora</h1>  
      <Display value={resultado !== null ? resultado : entrada || '0'} />
      <div className="button-container">  
        <div className="botones-numeros">
          {numeros.map((num) => (
            <NumberButton 
              key={num} 
              number={num} 
              handleClick={manejarClick} 
            />
          ))}
        </div>
        <div className="botones-operaciones">
          {operaciones.map((op) => (
            <OperationButton
              key={op}
              operation={op}
              handleClick={manejarClick}
            />
          ))}
        </div>
      </div>  
    </div>  
  </div>  
);
```
**Explicación**:

**¿Qué hace?**: Estructura la interfaz de la calculadora usando componentes y JSX

**¿Cómo cumple el requisito?**:
- Usa sintaxis JSX para crear elementos
- Renderiza componentes de forma declarativa
  
**¿Por qué es la mejor implementación?**:
- Sintaxis clara y legible
- Fácil composición de componentes
- Renderizado declarativo

### 4) **Añadir llaves con JSX**: Utilizar llaves para manejar las operaciones matemáticas y el estado de los números ingresados.

**Código de Implementación:**
```typescript
const App: React.FC = () => {
  // Estado para manejar entrada y resultado
  const [entrada, setEntrada] = useState<string>('');
  const [resultado, setResultado] = useState<string | null>(null);

  // Arreglos de números y operaciones
  const numeros: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  const operaciones: string[] = ['C', '+', '-', 'x', '/', '='];

  // Función para manejar clics con lógica de operaciones
  const manejarClick = (valor: string) => {
    switch(valor) {
      case '=':
        try {
          // Uso de llaves para evaluar expresión matemática
          const evaluado = eval(entrada.replace('x', '*')).toString();
          setResultado(evaluado);
        } catch {
          setResultado('Error');
        }
        break;
      case 'C':
        // Reseteo de estado usando llaves
        setEntrada('');
        setResultado(null);
        break;
      default:
        // Actualización de estado con función de callback
        setEntrada(prevEntrada => prevEntrada + valor);
    }
  };

  return (
    <div className="calculadora">
      {/* Uso de llaves para renderizado condicional */}
      <div className="pantalla">
        {resultado !== null 
          ? resultado 
          : entrada || '0'}
      </div>

      {/* Renderizado de botones usando llaves y map */}
      <div className="botones-contenedor">
        <div className="botones-numeros">
          {/* Renderizado de botones numéricos */}
          {numeros.map((numero) => (
            <button 
              key={numero} 
              onClick={() => manejarClick(numero)}
            >
              {numero}
            </button>
          ))}
        </div>

        <div className="botones-operaciones">
          {/* Renderizado de botones de operaciones */}
          {operaciones.map((operacion) => (
            <button 
              key={operacion} 
              onClick={() => manejarClick(operacion)}
              className={
                operacion === 'C' 
                  ? 'boton-limpiar' 
                  : operacion === '=' 
                  ? 'boton-igual' 
                  : 'boton-operacion'
              }
            >
              {operacion}
            </button>
          ))}
        </div>
      </div>

      {/* Ejemplo de cálculo en tiempo real con llaves */}
      <div className="informacion-calculo">
        <p>Entrada actual: {entrada}</p>
        <p>Resultado: {resultado || 'Pendiente'}</p>
        <p>
          Longitud de entrada: {entrada.length} 
          {entrada.length > 10 && ' (Entrada larga)'}
        </p>
      </div>
    </div>
  );
};

// Componente de botón personalizado con llaves
const BotonPersonalizado: React.FC<{
  valor: string;
  onClick: () => void;
  tipo?: 'numero' | 'operacion';
}> = ({ valor, onClick, tipo = 'numero' }) => {
  // Estilos dinámicos usando llaves
  const estilos = {
    backgroundColor: tipo === 'numero' 
      ? '#f0f0f0' 
      : tipo === 'operacion' 
      ? '#e0e0e0' 
      : 'transparent',
    color: tipo === 'numero' ? 'black' : 'blue'
  };

  return (
    <button 
      style={estilos} 
      onClick={onClick}
    >
      {valor}
    </button>
  );
};
```

**Explicación**:

**¿Qué hace?**: 
- Utiliza llaves {} en múltiples contextos de JSX
- Renderiza componentes dinámicamente
- Maneja el estado de la calculadora
- Aplica lógica condicional durante el renderizado

**¿Cómo cumple el requisito?**:

.Usa llaves para:
- Renderizado condicional
- Interpolación de variables
- Mapeo de elementos
- Evaluación de expresiones matemáticas
- Aplicación de estilos dinámicos
- Manejo de eventos
  
**¿Por qué es la mejor implementación?:**
- Flexibilidad en la manipulación de datos
- Código más declarativo
- Facilita la lectura y mantenimiento
- Permite transformaciones dinámicas
- Separa la lógica de presentación

### 5) **Configurar componentes con props**: Pasar la información de los botones a los componentes que representan las operaciones y los números.


**Código de Implementación:**
```typescript
// Definición de interfaces para props
interface NumberButtonProps {
  number: string;
  handleClick: (valor: string) => void;
}

interface OperationButtonProps {
  operation: string;
  handleClick: (valor: string) => void;
}

// Componente de botón numérico
const NumberButton: React.FC<NumberButtonProps> = ({ number, handleClick }) => {
  return (
    <button onClick={() => handleClick(number)}>
      {number}
    </button>
  );
};

// Componente de botón de operación
const OperationButton: React.FC<OperationButtonProps> = ({ operation, handleClick }) => {
  return (
    <button onClick={() => handleClick(operation)}>
      {operation}
    </button>
  );
};

// En el componente principal
const App: React.FC = () => {
  const numeros: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operaciones: string[] = ['+', '-', 'x', '/', '=', 'C'];
  
  const manejarClick = (valor: string) => {
    // Lógica de manejo de clic
    setEntrada(prev => prev + valor);
  };

  return (
    <div>
      <div className="botones-numeros">
        {numeros.map((num) => (
          <NumberButton 
            key={num} 
            number={num} 
            handleClick={manejarClick} 
          />
        ))}
      </div>
      <div className="botones-operaciones">
        {operaciones.map((op) => (
          <OperationButton
            key={op}
            operation={op}
            handleClick={manejarClick}
          />
        ))}
      </div>
    </div>
  );
};
```
**Explicación**:

**¿Qué hace?**: Configura componentes reutilizables con props específicas

**¿Cómo cumple el requisito?**:
- Define interfaces para props de botones
- Pasa funciones de manejo de clic como props
- Utiliza props para personalizar el comportamiento de los botones
  
**¿Por qué es la mejor implementación?**:
- Aumenta la modularidad del código
- Facilita la reutilización de componentes
- Mejora la legibilidad y mantenibilidad


  
### 6) **Renderizar condicionalmente**: Renderizar los resultados de las operaciones de acuerdo con los valores ingresados.


**Código de Implementación:**
```typescript
const App: React.FC = () => {
  const [entrada, setEntrada] = useState<string>('');
  const [resultado, setResultado] = useState<string | null>(null);

  const manejarClick = (valor: string) => {
    switch(valor) {
      case '=':
        try {
          // Renderizado condicional del resultado
          const evaluado = eval(entrada.replace('x', '*')).toString();
          setResultado(evaluado);
        } catch {
          // Manejo de error
          setResultado('Error');
        }
        break;
      case 'C':
        // Reseteo de estado
        setEntrada('');
        setResultado(null);
        break;
      default:
        setEntrada(prev => prev + valor);
    }
  };

  return (
    <div className="calculadora">
      <div className="pantalla">
        {/* Renderizado condicional */}
        {resultado !== null 
          ? resultado 
          : entrada || '0'}
      </div>
      {/* Resto de la interfaz */}
    </div>
  );
};
```
**Explicación**:

**¿Qué hace?**: Muestra resultados basados en condiciones

**¿Cómo cumple el requisito?**:
- Usa operador ternario para renderizar
- Maneja casos de resultado, entrada vacía y error
  
**¿Por qué es la mejor implementación?**:
- Código conciso y legible
- Manejo claro de diferentes estados de la calculadora
  
### 7) **Renderizar múltiples componentes a la vez**: Renderizar todos los botones numéricos y de operaciones utilizando map.


**Código de Implementación:**
```typescript
const App: React.FC = () => {
  const numeros: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  const operaciones: string[] = ['C', '+', '-', 'x', '/', '='];

  return (
    <div className="calculadora">
      <div className="botones-numeros">
        {/* Renderizado de botones numéricos */}
        {numeros.map((num) => (
          <NumberButton 
            key={num} 
            number={num} 
            handleClick={manejarClick} 
          />
        ))}
      </div>
      <div className="botones-operaciones">
        {/* Renderizado de botones de operación */}
        {operaciones.map((op) => (
          <OperationButton
            key={op}
            operation={op}
            handleClick={manejarClick}
          />
        ))}
      </div>
    </div>
  );
};
```
**Explicación**:

**¿Qué hace?**: Genera botones dinámicamente

**¿Cómo cumple el requisito?**:
- Usa map() para crear componentes de botones
- Genera botones a partir de arrays predefinidos
  
**¿Por qué es la mejor implementación?**:
- Código DRY (Don't Repeat Yourself)
- Fácil mantenimiento y escalabilidad
- Flexibilidad para agregar o modificar botones

### 8) **Mantener componentes puros**: Asegurar que los componentes no alteren el estado directamente y solo reciban información a través de props.

**Código de Implementación:**
```typescript
// Componente de botón puro
const NumberButton: React.FC<{
  number: string, 
  handleClick: (value: string) => void
}> = ({ number, handleClick }) => (
  <button onClick={() => handleClick(number)}>
    {number}
  </button>
);

// Componente principal
const App: React.FC = () => {
  const [entrada, setEntrada] = useState<string>('');

  // Función de actualización de estado inmutable
  const manejarClick = (valor: string) => {
    setEntrada(prevEntrada => {
      // Lógica de actualización sin modificar estado directamente
      return prevEntrada + valor;
    });
  };

  return (
    // Renderizado de componentes
  );
};
```

**Explicación**:

**¿Qué hace?**: Mantiene la pureza de los componentes

**¿Cómo cumple el requisito?**:
- Componentes solo reciben props
- Usa función de actualización de estado con función de callback
- Evita modificaciones directas del estado
  
**¿Por qué es la mejor implementación?**:
- Predecibilidad del estado
- Facilita pruebas unitarias
- Evita efectos secundarios no deseados

### 9) **Entender la UI como Árboles**: Visualizar la calculadora como una estructura de árbol donde los botones y la pantalla están organizados jerárquicamente.

**Código de Implementación:**
```typescript
const Calculadora: React.FC = () => {
  return (
    <div className="calculadora-contenedor">
      {/* Raíz del árbol de UI */}
      <PanelPrincipal>
        {/* Ramas principales */}
        <Pantalla />
        <ContenedorBotones>
          {/* Sub-ramas */}
          <BotonesNumeros />
          <BotonesOperaciones />
        </ContenedorBotones>
      </PanelPrincipal>
    </div>
  );
};

// Componentes que representan la estructura de árbol
const PanelPrincipal: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="panel-principal">{children}</div>
);

const Pantalla: React.FC = () => {
  const { entrada, resultado } = useCalculadora();
  return (
    <div className="pantalla">
      {resultado !== null ? resultado : entrada || '0'}
    </div>
  );
};

const ContenedorBotones: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="contenedor-botones">{children}</div>
);

const BotonesNumeros: React.FC = () => {
  const numeros = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  const { manejarClick } = useCalculadora();

  return (
    <div className="botones-numeros">
      {numeros.map(numero => (
        <BotonNumerico 
          key={numero} 
          valor={numero} 
          onClick={() => manejarClick(numero)} 
        />
      ))}
    </div>
  );
};

const BotonesOperaciones: React.FC = () => {
  const operaciones = ['C', '+', '-', 'x', '/', '='];
  const { manejarClick } = useCalculadora();

  return (
    <div className="botones-operaciones">
      {operaciones.map(operacion => (
        <BotonOperacion 
          key={operacion} 
          valor={operacion} 
          onClick={() => manejarClick(operacion)} 
        />
      ))}
    </div>
  );
};

// Hook personalizado para gestionar la lógica de la calculadora
const useCalculadora = () => {
  const [entrada, setEntrada] = useState<string>('');
  const [resultado, setResultado] = useState<string | null>(null);

  const manejarClick = (valor: string) => {
    switch(valor) {
      case '=':
        try {
          const calculo = eval(entrada.replace('x', '*')).toString();
          setResultado(calculo);
        } catch {
          setResultado('Error');
        }
        break;
      case 'C':
        setEntrada('');
        setResultado(null);
        break;
      default:
        setEntrada(prev => prev + valor);
    }
  };

  return { entrada, resultado, manejarClick };
};
```
**Explicación**:

**¿Qué hace?**: Representa la UI como una estructura de árbol jerárquica

**¿Cómo funciona?**: Utiliza el hook `useState` para almacenar el estado de la calculadora, incluyendo la entrada del usuario y el resultado de la operación.

**¿Por qué es la mejor implementación?**:
- Mejora la modularidad
- Facilita el mantenimiento
- Hace el código más legible y predecible

### 10) **Controlar eventos del usuario**: Capturar los clics en los botones numéricos y de operaciones.

**Código de Implementación:**
```typescript
