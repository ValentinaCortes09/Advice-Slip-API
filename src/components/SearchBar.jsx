import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Buscar consejo (usa patrones RegExp)..."
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyPress}
        style={styles.input}
      />
      <button onClick={onSearch} style={styles.button}>
        Buscar
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SearchBar;
