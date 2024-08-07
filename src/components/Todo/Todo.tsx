import React from "react";
import { TodoStructure } from "../../data/types";
import TodoStyled from "./TodoStyled";
import { useAppDispatch } from "../../store/hooks";
import { removeTodo, toggleTodo } from "../../store/features/TodosSlice";

export interface TodoProps {
  todo: TodoStructure;
}

const Todo = ({ todo }: TodoProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <TodoStyled className="todo">
      <button className="todo__status" onClick={handleToggle}>
        {todo.isDone ? "🟩" : "⬛"}
      </button>
      <span className="todo__name">{todo.name}</span>
      <button className="todo__delete" onClick={handleDelete}>
        ❌
      </button>
    </TodoStyled>
  );
};

export default Todo;
