import listChapa from "../../data/Listchapa";
import Todo from "../Todo/Todo";
import TodosListStyled from "../TodoList/TodoListStyled";

const TodoList = (): JSX.Element => {
  return (
    <TodosListStyled>
      {listChapa.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </TodosListStyled>
  );
};

export default TodoList;
