import { useRef, useState } from "react";
import TaskShower from "./TaskShower";

const TaskManager = () => {
  const inputRef = useRef();
  const [tasks, setTasks] = useState([]);
  const [id, setid] = useState(1);
  const inputHandler = (event) => {
    setid(id + 1);
    event.preventDefault();
    setTasks((prevState) => [
      ...prevState,
      { task: inputRef.current.value, id: id },
    ]);
  };
  const deleteHandler = (id) => {
    setTasks([...tasks.filter((elem) => elem.id != id)]);
  };
  const modHandler = (id) => {
    setTasks([...tasks.filter((elem) => elem.id != id)]);
    setTasks((prevState) => [
      ...prevState,
      { task: inputRef.current.value, id: id },
    ]);
  };
  return (
    <div>
      <form onSubmit={inputHandler} action="">
        <label htmlFor="">
          Inserisci nuovo task
          <br />
          <input type="text" ref={inputRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <TaskShower modifier={modHandler} deleter={deleteHandler} lista={tasks} />
    </div>
  );
};
export default TaskManager;
