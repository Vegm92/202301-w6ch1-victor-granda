export interface TodoStructure {
  id: number;
  name: string;
  isDone: boolean;
}

export type TodosListStructure = TodoStructure[];

export interface TodosState {
  todos: TodosListStructure;
  completedTasks: TodosListStructure;
  deletedTasks: TodosListStructure;
}
