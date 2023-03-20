import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{


  id : number =0;
  todo : Todo = {} as Todo

  constructor(
    private todoService : TodoDataService,
    private route : ActivatedRoute
  ){}


  ngOnInit(): void {
    this.id= this.route.snapshot.params['id']
    this.todoService.retrieveTodo('in28minutes',this.id ).subscribe(
      data =>this.todo=data
      
      
    )
  }

  saveTodo() : void{

  }

}
