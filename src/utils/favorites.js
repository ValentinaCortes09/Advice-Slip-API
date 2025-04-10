const FAVORITES_KEY = 'favoriteAdvices';

export const getFavorites = () => {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};

export const addToFavorites = (advice) => {
  const favorites = getFavorites();
  if (!favorites.some(f => f.id === advice.id)) {
    favorites.push(advice);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

export const removeFromFavorites = (id) => {
  const updated = getFavorites().filter(fav => fav.id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
};

export const isFavorite = (id) => {
  return getFavorites().some(fav => fav.id === id);
};
