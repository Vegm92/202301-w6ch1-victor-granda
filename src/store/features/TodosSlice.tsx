import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosListStructure } from "../../data/types";

export const initialTodos: TodosListStructure = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    loadTodos: (
      currentTodos: TodosListStructure,
      action: PayloadAction<TodosListStructure>
    ) => [...action.payload],
    removeTodos: (currentTodos, action: PayloadAction<number>) =>
      currentTodos.filter((todos) => todos.id !== action.payload),
    toggleTodos: (currentTodos, action: PayloadAction<number>) =>
      currentTodos.map((todo) => ({
        ...todo,
        isDone: todo.id === action.payload ? !todo.isDone : todo.isDone,
      })),
  },
});

export const todosReducer = todosSlice.reducer;
export const {
  loadTodos: loadTodosActionCreators,
  removeTodos: removeTodosActionCreator,
  toggleTodos: toggleTodosIsDoneActionCreators,
} = todosSlice.actions;
