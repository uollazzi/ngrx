import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, tap, mergeMap } from 'rxjs/operators';
import { TodosService } from 'src/app/services/todos.service';
import * as TodosActions from './todos.actions';


@Injectable()
export class TodosEffects {

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.getTodos),
      mergeMap(() => {
        return this.todoService.getAll().pipe(
          map(todos => TodosActions.getTodosSuccess({ todos: todos })),
          catchError(err => of(TodosActions.getTodosFailure({ error: err.message })))
        );
      })
    )
  );

  completeTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.complete),
      tap(action => console.log(action.id)),
      mergeMap((action) => {
        return this.todoService.complete(action.id, action.completed).pipe(
          map(todo => TodosActions.completeSuccess({ todo: todo })),
          catchError(err => of(TodosActions.getTodosFailure({ error: err.message })))
        );
      })
    )
  );

  // tap(action => {
  //   console.log(action.type);
  // }),
  constructor(
    private actions$: Actions,
    private todoService: TodosService
  ) { }
}
