import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class formArrayComponent {
  userInput = new FormControl('');
  inputForm = this.fb.group({
    inputs: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {}

  get inputs() {
    return this.inputForm.get('inputs') as FormArray;
  }

  addInput(event: Event) {
    event.preventDefault();
    const inputValue = this.userInput.value?.trim();
    if (inputValue) {
      this.inputs.push(new FormControl(inputValue));
      this.userInput.reset();
    }
  }

  removeInput(index: number) {
    this.inputs.removeAt(index);
  }
}