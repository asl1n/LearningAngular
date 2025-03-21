import { Component, Inject, inject } from '@angular/core';
import { SUBITEM } from '../subitem.token';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [{provide: SUBITEM, useValue: 'This Value is from ChildComponent'}]
})
export class ChildComponent {
  message: string = 'This is from ChildComponent';


  constructor(@Inject(SUBITEM) public injectedItem: string) {

  }
  showMessage(){
    alert(this.message);
  }
}
