import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  username = 'claude'
  password ='' 
  errorMessage= 'Invalid Credentials'
  invalidLogin= false

  constructor(private router : Router,
              private hardcodedAuthenticationService : HardcodedAuthenticationService){
    
  }
  ngOnInit(): void {
    
    
  }

   

  handleLogin = () =>{
    //console.log(this.username);
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
        this.invalidLogin=false ;
    }else{
      this.invalidLogin= true;
    }
  }
}
