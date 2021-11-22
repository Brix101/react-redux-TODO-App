import "./App.css";
import Task from "./Task";

// import redux
import { Provider } from "react-redux";
import { store } from "./app/store";

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
