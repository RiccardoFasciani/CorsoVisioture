import { useState } from "react";

const Form = () => {
  const [obj, setObj] = useState({ num1: 0, num2: 0 });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const formHandler = (e) => {
    e.preventDefault();
    console.log(parseInt(obj.num1) + parseInt(obj.num2));
  };
  return (
    <div>
      <form onSubmit={formHandler} action="">
        <label htmlFor="">
          <input onChange={changeHandler} type="number" name="num1" />
        </label>
        <label htmlFor="">
          <input onChange={changeHandler} type="number" name="num2" />
        </label>

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default Form;
