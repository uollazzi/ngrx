import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectTodos = (state: AppState) => state.todos;

export const isLoadingSelector = createSelector(
  selectTodos,
  state => state.isLoading
);

export const todosSelector = createSelector(
  selectTodos,
  state => state.todos
);

export const errorSelector = createSelector(
  selectTodos,
  state => state.error
);
