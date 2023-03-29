import React from 'react';
import companies from '../companies.json';
import FilteredList from './Components/FilteredList';
import "./App.css";

function App() {

  return (
    <div>
      <FilteredList companies={companies} />
    </div>
  );
}

export default App;
