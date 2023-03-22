import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import companies from '../companies.json';
import { setSelectedTag, setFilteredData} from './features/filterSlice';
import store from './features/store'


function App() {
  const [query, setQuery] = useState('',[]);
  
  const dispatch = useDispatch();
  
  const selectedTag = useSelector((state) => state.filter.selectedTag);
  
  const search = (item) => {
    return (
      item.companyName.toLowerCase().includes(query.toLowerCase()) ||
      item.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.join(' ').toLowerCase().includes(query.toLowerCase())
    );
  };
 
  const handleTagClick = (tag) => {
    dispatch(setSelectedTag(tag));
  };
  const filteredData = selectedTag
    ? companies.filter((item) => item.category.includes(selectedTag))
    : companies.filter(search);
  dispatch(setFilteredData(filteredData));
  console.log(store.getState())
 
  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
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
