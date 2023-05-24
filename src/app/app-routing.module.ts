import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: "counter", component: MyCounterComponent
  },
  {
    path: "todos", component: TodoListComponent
  },
  {
    path: "", redirectTo: "/todos", pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
