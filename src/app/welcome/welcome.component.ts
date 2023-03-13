import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{


  name : String = ''
  welcomeMessageFromService: String = ''

  constructor(
    private route : ActivatedRoute,
    private service : WelcomeDataService){

  }


  ngOnInit(): void {
    this.name= this.route.snapshot.params['name']
  }
  
  getWelcomeMessage() {
    this.service.executeHelloWoldBeanService().subscribe(
      response =>this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }


  handleSuccessfulResponse(response: any) : void{
    //console.log(response.name);

    this.welcomeMessageFromService= response.name

  }

  handleErrorResponse(error: any): void {
    this.welcomeMessageFromService = error;
  }



}
