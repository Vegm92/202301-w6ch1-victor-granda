import { TodosStructure } from "../../data/types";
import TodoStyled from "./TodoStyled";

export interface TodoProps {
  todo: TodosStructure;
}

const Todo = ({ todo: { id, isDone, name } }: TodoProps): JSX.Element => {
  const getStatus = () => {
    return isDone ? "🟩" : "⬛";
  };

  return (
    <TodoStyled className="todo">
      <button className="todo__status">{getStatus()}</button>
      <span className="todo__name">{name}</span>
      <button className="todo__delete">❌</button>
    </TodoStyled>
  );
};

export default Todo;
