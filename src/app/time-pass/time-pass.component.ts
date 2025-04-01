import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-pass',
  templateUrl: './time-pass.component.html',
  styleUrls: ['./time-pass.component.scss'],
})
export class TimePassComponent {
  meroForm: FormGroup;
  choices = ['Complaining', 'Checking', 'Need Support'];

  constructor(private fb: FormBuilder) {
    this.meroForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      choice: ['', Validators.required],
    });
  }

  submit() {
    if (this.meroForm.invalid) {
      alert('Do it Properly');
      return;
    }

    const { choice } = this.meroForm.value;
    console.log(
      `${
        choice === 'Complaining'
          ? 'Complaining'
          : choice === 'Checking'
          ? 'Checking'
          : 'Support needed'
      } Report:\n`,
      'Name:',
      this.meroForm.value.name,
      'Message:',
      this.meroForm.value.message
    );

    this.meroForm.reset();
  }
}
