import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }
  retrieveAllTodos(username: String){
    const url = `  http://localhost:8080/users/${username}/todos`;
    return this.http.get<Todo[]>(url);

  }

  deleteTodo(username: String, id: any){
    const url = `  http://localhost:8080/users/${username}/todos/${id}`;
    return this.http.delete<Todo[]>(url); 
  }
}