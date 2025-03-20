import { Component } from '@angular/core';

@Component({
  selector: 'app-learning-ng',
  templateUrl: './learning-ng.component.html',
  styleUrls: ['./learning-ng.component.scss']
})
export class LearningNGComponent {
  Aslin: string = 'green';
  isActive: boolean = false;
  products: string[] = ['Apple', 'Banana', 'Orange', 'Pineapple'];
  userStatus: string = 'admin';

  toggleButton() {
    this.isActive = !this.isActive;
  }
}
