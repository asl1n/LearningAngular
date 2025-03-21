import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingAroundComponent } from './playing-around.component';

describe('PlayingAroundComponent', () => {
  let component: PlayingAroundComponent;
  let fixture: ComponentFixture<PlayingAroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayingAroundComponent]
    });
    fixture = TestBed.createComponent(PlayingAroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
