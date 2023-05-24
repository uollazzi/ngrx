import { createReducer, on } from "@ngrx/store";
import * as TodosActions from "./todos.actions"
import { Todo, TodosState } from "src/app/models/todo";

export const initialState: TodosState = {
  isLoading: false,
  todos: [],
  error: null
};

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.getTodos, (state) => ({ ...state, isLoading: true })),
  on(TodosActions.getTodosSuccess, (state, action) => ({ ...state, isLoading: false, todos: action.todos })),
  on(TodosActions.getTodosFailure, (state, action) => ({ ...state, isLoading: false, error: action.error })),
  // on(TodosActions.complete, (state) => state),
  on(TodosActions.completeSuccess, (state, action) => {
    const index = state.todos.findIndex(todo => todo.id == action.todo.id); //finding index of the item

    const todos = [...state.todos]; //making a new array
    todos[index] = action.todo;//changing value in the new array

    return {
      ...state, //copying the orignal state
      todos: todos, //reassingning todos to new array
    }
  }),
  on(TodosActions.completeFailure, (state, action) => ({ ...state, error: action.error })),
)
