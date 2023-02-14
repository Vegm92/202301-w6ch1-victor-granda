import { useAppSelector } from "../../store/hooks";
import Todo from "../Todo/Todo";
import TodosListStyled from "../TodoList/TodoListStyled";

const TodoList = (): JSX.Element => {
  const { todos } = useAppSelector((todo) => todo);

  return (
    <TodosListStyled>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </TodosListStyled>
  );
};

export default TodoList;
