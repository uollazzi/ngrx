import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducers';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoPreviewComponent } from './components/todo-preview/todo-preview.component';
import { EffectsModule } from '@ngrx/effects';
import { todosReducer } from './store/todos/todos.reducers';
import { TodosEffects } from './store/todos/todos.effects';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    TodoListComponent,
    TodoPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      "count": counterReducer,
      "todos": todosReducer
    }, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    EffectsModule.forRoot([
      TodosEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
