import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFormArrayComponent } from './multiple-form-array.component';

describe('MultipleFormArrayComponent', () => {
  let component: MultipleFormArrayComponent;
  let fixture: ComponentFixture<MultipleFormArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleFormArrayComponent]
    });
    fixture = TestBed.createComponent(MultipleFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
