
import React from 'react';

interface ScreenProps {
  value: string | number;
}

const Display: React.FC<ScreenProps> = ({ value }) => {
  return <div className="pantalla">{value}</div>;
};

export default Display;