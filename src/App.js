import "./App.css";
import Task from "./Task";

// import User reducer or features
import taskReducer from "./features/task";
import ShowAddTaskReducer from "./features/showAddtask";
// For Redux Import
// For Redux Import
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    task: taskReducer,
    showAddtask: ShowAddTaskReducer,
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <Task />
      </Provider>
    </>
  );
}

export default App;
