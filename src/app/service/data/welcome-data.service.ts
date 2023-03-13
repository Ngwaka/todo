import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

    const url = `http://localhost:8080/hello-wold-bean/path-variable/${name}`;
    return this.http.get<HelloWorldBean>(url);

  }

}
