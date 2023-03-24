import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http : HttpClient 
  ) { }



  isUserLoggedIn(){
    let user= sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user===null)
  }


  getAuthenticateUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
    
  }


  getAuthenticateToken(){
    if(this.getAuthenticateUser())
    return sessionStorage.getItem(TOKEN)
    return 
    
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);


  }



  executeAutenticationService(username : String , password : String){

   
    let basicAuthHeaderString = 'Basic '+window.btoa(username+ ':'+password)




    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })

    const url = `${API_URL}/basicauth`;
    return this.http.get<AutenticationBean>(url, {headers})
      .pipe(  // the pipe method indicate what to do after the call of service succeed
        map(
          data =>{
            sessionStorage.setItem(AUTHENTICATED_USER, username.toString());
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);

            return data;
          }
        ));

  }

  

}


export class AutenticationBean {
  constructor(public message : String){}
}