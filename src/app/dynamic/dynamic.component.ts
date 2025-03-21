import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent {
  @Input() message: string = 'message from dyna comp';
  @Output() messageEvent = new EventEmitter<string>();

  //A function 
  sendEvent(){
    this.messageEvent.emit('button thichyeu');
  }
}
