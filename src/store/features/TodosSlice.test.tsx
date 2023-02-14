import { TodosListStructure, TodoStructure } from "../../data/types";
import {
  removeTodosActionCreator,
  todosReducer,
  toggleTodosIsDoneActionCreators,
} from "./TodosSlice";

describe("Given the TodosSlice function", () => {
  const todoId1: TodoStructure = {
    id: 1,
    name: "sacar al perro",
    isDone: false,
  };

  const todoId2: TodoStructure = {
    id: 2,
    name: "sacar lavavajillas",
    isDone: false,
  };

  const todos: TodosListStructure = [todoId1, todoId2];

  describe("When it receives a list of two todos with an id of 1 and 2 and the remove id 1 action", () => {
    test("Then it should return a list with just the id 2 todo", () => {
      const removeTodoId1 = removeTodosActionCreator(todoId1.id);
      const expectedNewList: TodosListStructure = [todoId2];

      const newList = todosReducer(todos, removeTodoId1);

      expect(newList).toStrictEqual(expectedNewList);
    });
  });

  describe("When it receives a list of Todos with 2 todo as not Done and the action to toggle them to done", () => {
    test("Then it should return a list with all todos with isDone true", () => {
      const toggleTodoId1 = toggleTodosIsDoneActionCreators(todoId1.id);

      const expectedTodoId1: TodosListStructure = [
        {
          id: 1,
          name: "sacar al perro",
          isDone: true,
        },
        {
          id: 2,
          name: "sacar lavavajillas",
          isDone: false,
        },
      ];
      const toggledTodoId1 = todosReducer(todos, toggleTodoId1);

      expect(toggledTodoId1).toStrictEqual(expectedTodoId1);
    });
  });
});
