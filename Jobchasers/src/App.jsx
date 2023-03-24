import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import companies from '../companies.json';
import { setSelectedTag, setFilteredData } from './features/filterSlice';

function App() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { selectedTag, filteredData } = useSelector((state) => state.filter);


  const filterData = (data, query, tag) => {
    return data.filter((item) => {
      const hasTag = !tag || item.category.includes(tag);
      const hasQuery =
        !query ||
        item.companyName.toLowerCase().includes(query.toLowerCase()) ||
        item.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
        item.category.join(' ').toLowerCase().includes(query.toLowerCase());
      return hasTag && hasQuery;
    });
  };

  const handleTagClick = (tag) => {
    dispatch(setSelectedTag(tag));
    const filteredData = filterData(companies, query, tag);
    dispatch(setFilteredData(filteredData));
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    const filteredData = filterData(companies, event.target.value, selectedTag);
    dispatch(setFilteredData(filteredData));
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleQueryChange} />
      <div>
        <button onClick={() => handleTagClick('Office')}>Office</button>
        <button onClick={() => handleTagClick('Consulting')}>Consulting</button>
        <button onClick={() => handleTagClick('Store')}>Store</button>
        <button onClick={() => handleTagClick('Bank')}>Bank</button>
        <button onClick={() => handleTagClick('Betting')}>Betting</button>
      </div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <h2>{item.companyName}</h2>
            <p>{item.jobTitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
