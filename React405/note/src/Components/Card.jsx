const Card = (props) => {
  return (
    <div>
      <h1 onClick={props.chiudifocus}>
        Titolo={props.obj[props.id - 1].titolo}
      </h1>
      <h1 onClick={props.chiudifocus}>Testo={props.obj[props.id - 1].nota}</h1>
    </div>
  );
};
export default Card;
