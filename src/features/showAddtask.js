import { createSlice } from "@reduxjs/toolkit";

export const showAddTaskSlice = createSlice({
  name: "showAdd",
  initialState: { value: false },
  reducers: {
    setShowAddTask: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const { setShowAddTask } = showAddTaskSlice.actions;

export default showAddTaskSlice.reducer;
