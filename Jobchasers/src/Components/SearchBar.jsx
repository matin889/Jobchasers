import React from 'react';
import style from '../../public/style.css'
function SearchBar({ query, setQuery }) {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
   <div>
    <header></header>
    <input
      className='search-box'
      type="text"
      placeholder="Search for jobs"
      value={query}
      onChange={handleInputChange}
    />
    </div> 
  );
}

export default SearchBar;