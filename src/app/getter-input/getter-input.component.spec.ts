import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetterInputComponent } from './getter-input.component';

describe('GetterInputComponent', () => {
  let component: GetterInputComponent;
  let fixture: ComponentFixture<GetterInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetterInputComponent]
    });
    fixture = TestBed.createComponent(GetterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
