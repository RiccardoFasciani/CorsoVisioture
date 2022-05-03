import "../App.css";

const Saluto = ({ name }) => {
  return (
    <div style={{ fontSize: "30px" }} className="saluto">
      Ciao {name}
    </div>
  );
};

export default Saluto;
