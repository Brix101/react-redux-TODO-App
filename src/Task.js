import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

import { useSelector } from "react-redux";

function Task() {
  const showAddTask = useSelector((state) => state.showAddtask.value);
  const tasks = useSelector((state) => state.task.value);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {showAddTask && <AddTask />}
                {tasks.length > 0 ? (
                  <Tasks tasks={tasks} />
                ) : (
                  "No Tasks To Show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Task;
