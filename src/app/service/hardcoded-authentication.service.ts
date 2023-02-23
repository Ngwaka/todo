import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username : String , password : String){
    if(username=='claude' && password=='dummy'){
      sessionStorage.setItem('authenticatedUser', username.toString());
      return true;

    }
    return false;
    
  }

  isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }

}
