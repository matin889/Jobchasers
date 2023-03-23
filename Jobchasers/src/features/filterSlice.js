import { createSlice } from '@reduxjs/toolkit';
export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    selectedTag: '',
    filteredData: [],
  },
  reducers: {
    setSelectedTag: (state, action) => {
      state.selectedTag = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});


export const { setSelectedTag, setFilteredData } = filterSlice.actions;
export default filterSlice.reducer;