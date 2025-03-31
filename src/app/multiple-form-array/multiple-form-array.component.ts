import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiple-form-array',
  templateUrl: './multiple-form-array.component.html',
  styleUrls: ['./multiple-form-array.component.scss']
})
export class MultipleFormArrayComponent {
  developerForm: FormGroup; 

  constructor(private fb: FormBuilder) {
    this.developerForm = this.fb.group({
      role: ['FrontEnd Dev', Validators.required], 
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
      console.log(this.developerForm.value);
      alert('Form Submitted Successfully!');
    } else {
      alert('Please fill out all required fields.');
    }
  }
}