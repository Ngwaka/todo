import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { NotificationsPopupService } from '../service/notifications-popup.service';

export class Todo{
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
export class ListTodosComponent implements OnInit{


  todos : Todo[]= [];
  //message = ''
  
  constructor(
    private todoService : TodoDataService,
    private notification : NotificationsPopupService,
    private router :  Router
  ){}


  ngOnInit(): void {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response=>{
        this.todos = response;
      }
    );
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response=>{
        this.todos = response;
      }
    );
  }

  deleteTodo(id : any){
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response =>{
       // this.message = `Delete of Todo ${id} successful`;
        this.notification.showSuccess(`Delete of Todo ${id} successful`);
        this.refreshTodos()
      }
    )
  }


  updateTodo(id : any){
    this.router.navigate(['todos', id]);
    
  }
    
    
  

}
