import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-mero-form',
  templateUrl: './mero-form.component.html',
  styleUrls: ['./mero-form.component.css']

})
export class MeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}