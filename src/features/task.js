import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: false,
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 1:30pm",
    reminder: true,
  },
];

export const taskSlice = createSlice({
  name: "task",
  initialState: { value: initialStateValue },
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
      alert(action.payload.text + " Task Added");
    },
    removeTask: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((task) => task.id !== id);
    },
    toggleTask: (state, action) => {
      const id = action.payload;
      state.value = state.value.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
  },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
