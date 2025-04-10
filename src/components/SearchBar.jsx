import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar consejo..."
        value={value}
        onChange={onChange}
      />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
