import React, { useState } from "react";

const Form = () => {
  const [todos, setTodos] = useState([]);

  const handleChange = (event: any) => {
    setTodos(event.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">
          <input type="text" onChange={handleChange} value={todos} />
        </label>
      </div>
      <button>Add</button>
      <button>Clear</button>
    </form>
  );
};

export default Form;
