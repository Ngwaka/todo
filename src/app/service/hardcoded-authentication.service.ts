import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username : String , password : String){
    if(username=='claude' && password=='dummy'){
      return true;

    }else{
      return false;
    }
  }
}
