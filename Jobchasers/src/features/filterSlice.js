import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { selectedTag: null },
  reducers: {
    setSelectedTag: (state, action) => {
      const tag = action.payload;
      state.selectedTag = state.selectedTag === tag ? null : tag;
    },
  },
});

export const { setSelectedTag } = filterSlice.actions;
export default filterSlice.reducer;