export interface Todo {
  id: number;
  text: string;
  createdAt: number;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[]
  isLoading: boolean;
  error: string | null;
}
