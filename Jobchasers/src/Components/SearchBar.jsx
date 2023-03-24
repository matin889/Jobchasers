import React from 'react';

function SearchBar({ query, setQuery }) {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for jobs"
      value={query}
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;