// src/components/Pantalla.tsx
import React from 'react';

interface PantallaProps {
  valor: string | number;
}

const Display: React.FC<PantallaProps> = ({ valor }) => {
  return <div className="pantalla">{valor}</div>;
};

export default Display;
