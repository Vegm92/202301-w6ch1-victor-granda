import { TodosState, TodoStructure } from "../../data/types";
import { addTodo, removeTodo, todosReducer, toggleTodo } from "./TodosSlice";

describe("Given the TodosSlice function", () => {
  const initialState: TodosState = {
    todos: [],
    completedTasks: [],
    deletedTasks: [],
  };

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

  beforeEach(() => {
    initialState.todos = [todoId1, todoId2];
    initialState.completedTasks = [];
    initialState.deletedTasks = [];
  });

  describe("When it receives a list of two todos with an id of 1 and 2 and the remove id 1 action", () => {
    test("Then it should return a list with just the id 2 todo and add the removed todo to deletedTasks", () => {
      const removeTodoId1 = removeTodo(todoId1.id);
      const newState = todosReducer(initialState, removeTodoId1);

      expect(newState.todos).toEqual([todoId2]);
      expect(newState.deletedTasks).toEqual([todoId1]);
    });
  });

  describe("When it receives a list of Todos with 2 todo as not Done and the action to toggle them to done", () => {
    test("Then it should return a list with the toggled todo as isDone true and add it to completedTasks", () => {
      const toggleTodoId1 = toggleTodo(todoId1.id);
      const newState = todosReducer(initialState, toggleTodoId1);

      const expectedTodos = [{ ...todoId1, isDone: true }, todoId2];

      expect(newState.todos).toEqual(expectedTodos);
      expect(newState.completedTasks).toEqual([{ ...todoId1, isDone: true }]);
    });
  });

  describe("When it receives an action to add a new todo", () => {
    test("Then it should add the new todo to the todos list", () => {
      const newTodo = { name: "new task", isDone: false };
      const addTodoAction = addTodo(newTodo);
      const newState = todosReducer(initialState, addTodoAction);

      expect(newState.todos).toHaveLength(3);
      expect(newState.todos[2].name).toBe("new task");
    });
  });

  describe("When it toggles a completed task to not done", () => {
    test("Then it should update the todo in the list and remove it from completedTasks", () => {
      // First, toggle a todo to done
      let state = todosReducer(initialState, toggleTodo(todoId1.id));
      // Then, toggle it back to not done
      state = todosReducer(state, toggleTodo(todoId1.id));

      expect(state.todos[0].isDone).toBe(false);
      expect(state.completedTasks).toHaveLength(0);
    });
  });
});
