import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosListStructure, TodoStructure } from "../../data/types";

interface TodosState {
  todos: TodosListStructure;
  completedTasks: TodosListStructure;
  deletedTasks: TodosListStructure;
}

const initialState: TodosState = {
  todos: [],
  completedTasks: [],
  deletedTasks: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTodos: (state, action: PayloadAction<TodosListStructure>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Omit<TodoStructure, "id">>) => {
      state.todos.push({ ...action.payload, id: Date.now() });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const removedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (removedTodo) {
        state.deletedTasks.push(removedTodo);
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      }
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
        if (todo.isDone) {
          state.completedTasks.push({ ...todo });
        } else {
          state.completedTasks = state.completedTasks.filter(
            (t) => t.id !== todo.id
          );
        }
      }
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const { loadTodos, addTodo, removeTodo, toggleTodo } =
  todosSlice.actions;
