import { Component, Inject, Input } from '@angular/core';
import { SUBITEM } from '../subitem.token';

@Component({
  selector: 'app-taskcomponent',
  templateUrl: './taskcomponent.component.html',
  styleUrls: ['./taskcomponent.component.scss'],
  providers: [{ provide: SUBITEM, useValue: 'task component value' }]
})
export class TaskcomponentComponent {
  @Input() taskName: string = '';

  constructor(@Inject(SUBITEM) public injectedItem: string) {
    
  }
}
