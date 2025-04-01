import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-pass',
  templateUrl: './time-pass.component.html',
  styleUrls: ['./time-pass.component.scss'],
})
export class TimePassComponent {
  meroForm: FormGroup;
  choices= ['Complaining','Checking','Need Support'];

  constructor(private fb: FormBuilder) {
    this.meroForm = fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      choice: ['', Validators.required]
    });
  }

  submit() {
    if (this.meroForm.invalid) {
      alert('Please enter a name and message');
    } else {
      console.log('done');
    }
  }
}
