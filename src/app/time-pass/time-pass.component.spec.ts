import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePassComponent } from './time-pass.component';

describe('TimePassComponent', () => {
  let component: TimePassComponent;
  let fixture: ComponentFixture<TimePassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimePassComponent]
    });
    fixture = TestBed.createComponent(TimePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
