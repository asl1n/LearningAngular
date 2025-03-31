import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeroFormComponent } from './mero-form.component';

describe('MeroFormComponent', () => {
  let component: MeroFormComponent;
  let fixture: ComponentFixture<MeroFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeroFormComponent]
    });
    fixture = TestBed.createComponent(MeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
