import React, { useState } from "react";
import FormStyled from "./FormStyled";
import { useAppDispatch } from "../../store/hooks";
import { addTodo } from "../../store/features/TodosSlice";

const Form = () => {
  const [todoName, setTodoName] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todoName.trim()) {
      dispatch(addTodo({ name: todoName, isDone: false }));
      setTodoName("");
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todoName">
          <input
            id="todoName"
            type="text"
            onChange={handleChange}
            value={todoName}
            placeholder="Enter a new todo"
          />
        </label>
      </div>
      <button type="submit">Add</button>
    </FormStyled>
  );
};

export default Form;
