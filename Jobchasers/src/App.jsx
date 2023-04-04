import React from "react";
import companies from "../companies.json";
import FilteredList from "./Components/FilteredList";

function App() {
  return (
    <>
      <FilteredList companies={companies} />
    </>
  );
}

export default App;
