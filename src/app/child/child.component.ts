import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  message: string = 'This is from ChildComponent';


  showMessage(){
    alert(this.message);
  }
}
