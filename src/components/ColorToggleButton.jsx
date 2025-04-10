import React, { useState } from 'react';

const ColorToggleButton = () => {
  const [color, setColor] = useState('black');

  const toggleColor = () => {
    const newColor = color === 'black' ? '#800080' : 'black';
    document.body.style.backgroundColor = newColor;
    setColor(newColor);
  };

  return (
    <button onClick={toggleColor}>
      Cambiar color de fondo
    </button>
  );
};

export default ColorToggleButton;
