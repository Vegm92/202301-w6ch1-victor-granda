import React from "react";
import { TodoStructure } from "../../data/types";
import Todo from "../Todo/Todo";
import TodosListStyled from "./TodoListStyled";

interface TodoListProps {
  todos: TodoStructure[];
}

const TodoList = ({ todos }: TodoListProps): JSX.Element => {
  return (
    <TodosListStyled>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </TodosListStyled>
  );
};

export default TodoList;
