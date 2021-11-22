import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

import { useSelector, useDispatch } from "react-redux";

import { setShowAddTask } from "../features/showAddtask";

const Header = ({ title }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const showAdd = useSelector((state) => state.showAddtask.value);

  const onAdd = () => {
    dispatch(setShowAddTask());
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header;
