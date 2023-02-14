import listChapa from "../../data/Listchapa";
import Todo from "../Todo/Todo";
import TodosListStyled from "../TodoList/TodoListStyled";

const TodoList = (): JSX.Element => {
  return (
    <TodosListStyled>
      {listChapa.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </TodosListStyled>
  );
};

export default TodoList;
