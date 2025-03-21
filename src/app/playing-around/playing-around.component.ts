import { Component } from '@angular/core';

@Component({
  selector: 'app-playing-around',
  templateUrl: './playing-around.component.html',
  styleUrls: ['./playing-around.component.scss']
})
export class PlayingAroundComponent {
  submitted = false;
  message: string = '';

  formPathau() {
    this.submitted = true;

    setTimeout(() => {
      this.submitted = false;
      this.message = '';  
    }, 2000);
  }
}
