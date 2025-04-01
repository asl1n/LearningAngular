import { Component } from '@angular/core';

@Component({
  selector: 'app-time-pass',
  templateUrl: './time-pass.component.html',
  styleUrls: ['./time-pass.component.scss'],
})
export class TimePassComponent {
  name = '';
  message = '';

  submit() {
    if (this.name === '' && this.message === '') {
      alert('Please enter a name and message');
    } else {
      console.log('done');
    }
  }
}
