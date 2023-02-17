import { Component } from '@angular/core';

export class Todo {
  constructor(  
    public id : number,
    public description : String,
    public done: boolean,
    public targetDate : Date
    ){
    
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {


  todos= [
    new Todo(1, 'Learn to dance', false , new Date()),
    new Todo(2, 'Become an expert at Angular', false , new Date()),
    new Todo(3, 'Visite Dschang', false , new Date())
  ]
  

}
