import React, { useState } from "react";
import FormStyled from "./FormStyled";

const Form = () => {
  const [todos, setTodos] = useState([]);

  const handleChange = (event: any) => {
    setTodos(event.target.value);
  };

  return (
    <>
      <FormStyled className="form">
        <div>
          <label htmlFor="name">
            <input type="form__input" onChange={handleChange} value={todos} />
          </label>
        </div>
        <button className="form__button-add">Add</button>
        <button className="form__button-clear">Clear</button>
      </FormStyled>
    </>
  );
};

export default Form;
