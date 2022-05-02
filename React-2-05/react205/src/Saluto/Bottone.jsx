const Bottone = ({ log }) => {
  const logga = (a) => {
    console.log("Ciao", a);
  };
  return <button onClick={() => logga(log)}>ciao</button>;
};
export default Bottone;
