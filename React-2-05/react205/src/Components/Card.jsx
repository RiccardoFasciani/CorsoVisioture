const Card = (props) => {
  const cardStyle = {
    width: "18rem",
    margin: "10px",
    border: "1px solid black",
    borderRadius: "5px",
    boxShadow: "5px 5px 5px black",
    backgroundColor: "#f5f5f5",
    padding: "10px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Arial",
  };
  return <div style={cardStyle}>{props.children}</div>;
};
export default Card;
