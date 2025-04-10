import React, { useEffect, useState } from 'react';
import ShareButtons from '../components/ShareButtons';
import {
  addToFavorites,
  removeFromFavorites,
  isFavorite
} from '../utils/favorites';

const Home = () => {
  const [advice, setAdvice] = useState(null);
  const [fav, setFav] = useState(false);

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  useEffect(() => {
    if (advice) {
      setFav(isFavorite(advice.id));
    }
  }, [advice]);

  const toggleFavorite = () => {
    if (!advice) return;
    if (fav) {
      removeFromFavorites(advice.id);
    } else {
      addToFavorites(advice);
    }
    setFav(!fav);
  };

  return (
    <div>
      <h2>Consejo del día</h2>
      {advice && <p>{advice.advice}</p>}

      <button onClick={fetchAdvice}>🔁 Otro consejo</button>
      <button onClick={toggleFavorite}>
        {fav ? '❌ Quitar de Favoritos' : '❤️ Agregar a Favoritos'}
      </button>

      {advice && <ShareButtons advice={advice.advice} />}
    </div>
  );
};

export default Home;
