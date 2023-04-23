import { Component, Input, OnInit } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'task2';


  command = "";
  order = "";
  sendData(){
    this.order = this.command;
  }

  constructor(public _interactionService: InteractionService){}

  
      }


