import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private apiBaseURL = "http://localhost:3000/todos/";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiBaseURL).pipe(
      delay(1000)
    );
  }

  complete(id: number, completed: boolean): Observable<Todo> {
    return this.http.patch<Todo>(this.apiBaseURL + id, { completed: completed });
  }

  remove(id: number): Observable<any> {
    return this.http.delete<any>(this.apiBaseURL + id);
  }
}
