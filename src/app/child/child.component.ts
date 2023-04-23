import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


  ngOnInit(){}
  
  @Input() order : any
  // @Output() public reply =  new EventEmitter <string>();

  constructor(private  _interactionService: InteractionService){}

  public buttonclick1(){
    this._interactionService.reply = 'Ok sir!we are on it now'
  }
  public buttonclick2(){
    this._interactionService.reply = 'Falling back....No more resources!'
  }
  public buttonclick3(){
    this._interactionService.reply = 'Help us ! we need backups!'
  }


}