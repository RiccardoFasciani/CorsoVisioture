const TaskDeleter = (props) => {
  return (
    <button
      type="button"
      value="cancellami"
      onClick={() => props.deleter(props.id)}
    >
      Cancellami
    </button>
  );
};

export default TaskDeleter;
