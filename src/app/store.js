import { configureStore } from "@reduxjs/toolkit";

// import User reducer or features
import taskReducer from "../features/task";
import ShowAddTaskReducer from "../features/showAddtask";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    showAddtask: ShowAddTaskReducer,
  },
});
