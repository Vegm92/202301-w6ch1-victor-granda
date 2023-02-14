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
  },
});

export const todosReducer = todosSlice.reducer;
