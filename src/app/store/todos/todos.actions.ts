import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo";

export const getTodos = createAction("[Todos] Get Todos");
export const getTodosSuccess = createAction("[Todos] Get Todos Success", props<{ todos: Todo[] }>());
export const getTodosFailure = createAction("[Todos] Get Todos Failure", props<{ error: string }>());

export const complete = createAction("[Todos] Complete Todo", props<{ id: number, completed: boolean }>());
export const completeSuccess = createAction("[Todos] Complete Todo Success", props<{ todo: Todo }>());
export const completeFailure = createAction("[Todos] Complete Todo Failure", props<{ error: string }>());

export const remove = createAction("[Todos] Remove Todo");

