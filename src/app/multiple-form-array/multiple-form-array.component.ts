import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiple-form-array',
  templateUrl: './multiple-form-array.component.html',
  styleUrls: ['./multiple-form-array.component.scss']
})
export class MultipleFormArrayComponent {
  developerForm: FormGroup; 
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.developerForm = this.fb.group({
      skills: this.fb.array([]) 
    });
  }

  get skills(): FormArray {
    return this.developerForm.get('skills') as FormArray;
  }

  addSkill() {
    const skill = this.fb.group({
      name: ['', Validators.required], 
      level: ['', Validators.required] 
    });
    this.skills.push(skill);
  }

  removeSkill(index: number) {
      this.skills.removeAt(index);
  }

  onSubmit() {
    if (this.developerForm.valid) {
      this.isSubmitted = true;
    } else {
      alert('Please fill out all required fields.');
    }
  }
}