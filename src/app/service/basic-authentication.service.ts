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



  isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }


  getAuthenticateUser(){
    return sessionStorage.getItem('authenticatedUser')
    
  }


  getAuthenticateToken(){
    if(this.getAuthenticateUser())
    return sessionStorage.getItem('token')
    return 
    
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');


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
            sessionStorage.setItem('token', basicAuthHeaderString);

            return data;
          }
        ));

  }

  

}


export class AutenticationBean {
  constructor(public message : String){}
}