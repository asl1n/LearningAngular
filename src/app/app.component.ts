import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Docs-Follow';
  value: number= 10;
  receivedDataFromChild= '';
  isActive : boolean = true;

  dataReceived(data : string){
    this.receivedDataFromChild = data;
  }
  destroyHook(){
    this.isActive = !this.isActive;
  }
}
