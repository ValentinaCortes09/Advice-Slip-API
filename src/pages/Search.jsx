import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(`https://api.adviceslip.com/advice/search/${query}`);
    const data = await res.json();
    setResults(data.slips || []);
  };

  return (
    <div>
      <h2>Buscar consejos</h2>
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.advice}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
