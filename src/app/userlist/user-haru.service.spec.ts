import { TestBed } from '@angular/core/testing';

import { UserHaruService } from './user-haru.service';

describe('UserHaruService', () => {
  let service: UserHaruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHaruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
