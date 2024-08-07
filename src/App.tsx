import React from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import TaskHistory from "./components/TaskHistory/TaskHistory";
import { useAppSelector } from "./store/hooks";

function App() {
  const todos = useAppSelector((state) => state.todos.todos);

  return (
    <>
      <h1>Todo RTK</h1>
      <Form />
      <TodoList todos={todos} />
      <TaskHistory />
    </>
  );
}

export default App;
