import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query) {
      setResults([]);
      setError('');
      return;
    }

    try {
      const res = await fetch(`https://api.adviceslip.com/advice/search/${query}`);
      const data = await res.json();

      if (data.slips) {
        // Filtrar localmente con patrón RegExp
        const regex = new RegExp(query, 'i'); // case-insensitive
        const filtered = data.slips.filter(slip => regex.test(slip.advice));
        setResults(filtered);
        setError('');
      } else {
        setResults([]);
        setError('No se encontraron consejos que coincidan con tu búsqueda.');
      }
    } catch (err) {
      setError('Error al buscar consejos.');
      setResults([]);
    }
  };

  return (
    <div>
      <h2>Buscar consejos</h2>
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.advice}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
