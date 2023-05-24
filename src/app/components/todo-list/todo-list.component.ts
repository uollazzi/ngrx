import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';
import { AppState } from 'src/app/store/app.state';
import * as TodosActions from 'src/app/store/todos/todos.actions';
import { errorSelector, isLoadingSelector, todosSelector } from 'src/app/store/todos/todos.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppState>) {

    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.todos$ = this.store.pipe(select(todosSelector));
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.store.dispatch(TodosActions.getTodos());
  }
}
