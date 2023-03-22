import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor (public name : String){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http : HttpClient 
  ) { }

  executeHelloWoldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-wold-bean');

  }

  executeHelloWoldBeanServiceWithPathVariable(name: any){

    let basicAuthHeaderString = this.createbasicHttpHeader();
    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })

    const url = `http://localhost:8080/hello-wold-bean/path-variable/${name}`;
    return this.http.get<HelloWorldBean>(url, {headers});

  }

  createbasicHttpHeader(){
    let username = 'in28minutes'
    let password= 'dummy'
    let basicAuthHeaderString = 'Basic '+window.btoa(username+ ':'+password)
    return basicAuthHeaderString;
  }

}
