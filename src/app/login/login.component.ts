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
  errorMessage= 'Invalid Credentials'
  invalidLogin= false

  constructor(){
    
  }
  ngOnInit(): void {
    
    
  }

   

  handleLogin = () =>{
    console.log(this.username);
    if(this.username=='in28minutes' && this.password=='dummy'){
        this.invalidLogin=false ;
    }else{
      this.invalidLogin= true;
    }
  }
}
