import { FaTimes } from "react-icons/fa";

import { useDispatch } from "react-redux";

import { removeTask, toggleTask } from "../features/task";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const onDelete = () => {
    dispatch(removeTask(task.id));
  };
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
