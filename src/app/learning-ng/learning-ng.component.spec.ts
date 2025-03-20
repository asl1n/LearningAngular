import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningNGComponent } from './learning-ng.component';

describe('LearningNGComponent', () => {
  let component: LearningNGComponent;
  let fixture: ComponentFixture<LearningNGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearningNGComponent]
    });
    fixture = TestBed.createComponent(LearningNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
