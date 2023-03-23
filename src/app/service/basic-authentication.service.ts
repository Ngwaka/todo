import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HelloWorldBean } from './data/welcome-data.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http : HttpClient 
  ) { }

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

  logout(){
    sessionStorage.removeItem('authenticatedUser');

  }



  executeAutenticationService(username : String , password : String){

   
    let basicAuthHeaderString = 'Basic '+window.btoa(username+ ':'+password)




    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })

    const url = `http://localhost:8080/basicauth`;
    return this.http.get<AutenticationBean>(url, {headers})
      .pipe(  // the pipe method indicate what to do after the call of service succeed
        map(
          data =>{
            sessionStorage.setItem('authenticatedUser', username.toString());
            return data;
          }
        ));

  }

  

}


export class AutenticationBean {
  constructor(public message : String){}
}