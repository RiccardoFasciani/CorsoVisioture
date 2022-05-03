import TaskDeleter from "./TaskDeleter";
import TaskModifier from "./TaskModifier";
const TaskShower = (props) => {
  return props.lista.map((taskObj) => {
    return (
      <h1 key={taskObj.id}>
        Id: {taskObj.id} Task: {taskObj.task}
        <TaskDeleter
          deleter={props.deleter}
          id={taskObj.id}
          lista={props.tasks}
        />
        <TaskModifier modifier={props.modifier} id={taskObj.id} />
      </h1>
    );
  });
};
export default TaskShower;
