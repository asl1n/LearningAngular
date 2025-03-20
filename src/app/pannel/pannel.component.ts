import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.scss'],
  outputs: ['meroEvent']
})
export class PannelComponent {
  @Output() meroEvent = new EventEmitter<string>();
  sendData(){
     this.meroEvent.emit('pannel to app');
  }
}
