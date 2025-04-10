import React, { useState } from 'react';

const Surprise = () => {
  const [advice, setAdvice] = useState(null);

  const getRandomAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip);
    new Notification('Consejo sorpresa', { body: data.slip.advice });
  };

  const addToFavorites = () => {
    const current = JSON.parse(localStorage.getItem('favorites')) || [];
    const updated = [...current, advice];
    localStorage.setItem('favorites', JSON.stringify(updated));
    alert('¡Consejo guardado en favoritos!');
  };

  return (
    <div>
      <h2>Consejo sorpresa</h2>
      {advice && <p>{advice.advice}</p>}
      <button onClick={getRandomAdvice}>¡Dame uno!</button>
      {advice && <button onClick={addToFavorites}>Guardar en favoritos</button>}
    </div>
  );
};

export default Surprise;
