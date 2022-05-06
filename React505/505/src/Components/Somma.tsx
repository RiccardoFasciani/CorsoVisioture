function Somma(props: { togli: (e: any) => {}; a: number; b: number }) {
  const risultato = props.a + props.b;

  return <h1 onClick={props.togli}>{risultato}</h1>;
}
export default Somma;
