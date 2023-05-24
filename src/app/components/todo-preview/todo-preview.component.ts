import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo';
import { AppState } from 'src/app/store/app.state';
import * as TodosActions from 'src/app/store/todos/todos.actions'

@Component({
  selector: 'app-todo-preview',
  templateUrl: './todo-preview.component.html',
  styleUrls: ['./todo-preview.component.css']
})
export class TodoPreviewComponent {
  constructor(private store: Store<AppState>) {

  }

  @Input()
  todo?: Todo;

  completa() {
    this.store.dispatch(TodosActions.complete({ id: this.todo!.id, completed: !this.todo!.completed }));
  }
}
