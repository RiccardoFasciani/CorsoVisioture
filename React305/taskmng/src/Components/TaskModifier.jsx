const TaskModifier = (props) => {
  return (
    <button
      type="button"
      value="modificami"
      onClick={() => props.modifier(props.id)}
    >
      Modificami
    </button>
  );
};
export default TaskModifier;
