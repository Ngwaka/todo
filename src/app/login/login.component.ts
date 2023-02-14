import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  username = 'in28minutes'
  password ='' 

  constructor(){
    
  }
  ngOnInit(): void {
    
    
  }

   

  handleLogin = () =>{
    console.log(this.username);
  }
}
