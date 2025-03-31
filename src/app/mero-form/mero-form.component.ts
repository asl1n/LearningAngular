import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-mero-form',
  templateUrl: './mero-form.component.html',
  styleUrls: ['./mero-form.component.scss']
})

export class MeroFormComponent {
    powers = ['Really smart', 'idiot', 'super hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit(){
      this.submitted = true;
    }

    myHero =  new Hero(42, 'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover');

}
