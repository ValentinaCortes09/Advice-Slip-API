import React, { useEffect, useState } from 'react';
import { getFavorites, removeFromFavorites } from '../utils/favorites';


const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    const storedFavorites = getFavorites();
    setFavorites(storedFavorites);
  };

  const handleRemove = (id) => {
    removeFromFavorites(id);
    loadFavorites();
  };

  return (
    <div>
      <h2>❤️ Consejos Favoritos</h2>

      {favorites.length === 0 ? (
        <p>No has guardado ningún consejo aún.</p>
      ) : (
        favorites.map((item) => (
          <div key={item.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #444', borderRadius: '8px' }}>
            <p>{item.advice}</p>
            <button onClick={() => handleRemove(item.id)}>❌ Quitar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
