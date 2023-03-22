import React, { useState } from 'react';
import companies from '../companies.json';


function App() {
  const [query, setQuery] = useState('');
  
  const search = (item) => {
    return (
      item.companyName.toLowerCase().includes(query.toLowerCase()) ||
      item.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.join(' ').toLowerCase().includes(query.toLowerCase())
    );
  };

const filteredData = companies.filter(search);


  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
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
