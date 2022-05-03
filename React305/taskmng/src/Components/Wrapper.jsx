const Wrapper = (props) => {
  const wrapperStyle = {
    border: "1px solid red",
    borderRadius: "5px",
    boxShadow: "5px 5px 5px red",
  };
  return props.isModified ? (
    <div style={wrapperStyle}>{props.children}</div>
  ) : (
    <div>{props.children}</div>
  );
};
export default Wrapper;
