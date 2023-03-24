import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }
  retrieveAllTodos(username: String){
    const url = `   ${API_URL}/users/${username}/todos`;
    return this.http.get<Todo[]>(url);

  }

  deleteTodo(username: String, id: any){
    const url = `   ${API_URL}/users/${username}/todos/${id}`;
    return this.http.delete<Todo[]>(url); 
  }

  retrieveTodo(username: String, id: any){
    const url = `  ${API_URL}/users/${username}/todos/${id}`;
    return this.http.get<Todo>(url); 
  }

  updateTodo(username: String, id: any, todo :Todo){
    const url = `   ${API_URL}/users/${username}/todos/${id}`;
    return this.http.put<Todo>(url, todo); 
  }

  createTodo(username: String, todo :Todo){
    const url = `   ${API_URL}/users/${username}/todos`;
    return this.http.post<Todo>(url, todo); 
  }
}