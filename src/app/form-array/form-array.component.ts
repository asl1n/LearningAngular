import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class formArrayComponent {
  hobbyInput = new FormControl('');
  hobbiesForm = this.fb.group({
    hobbies: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {}

  get hobbies() {
    return this.hobbiesForm.get('hobbies') as FormArray;
  }

  addHobby(event: Event) {
    event.preventDefault();
    const hobbyValue = this.hobbyInput.value?.trim();
    if (hobbyValue) {
      this.hobbies.push(new FormControl(hobbyValue));
      this.hobbyInput.reset();
    }
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }
}