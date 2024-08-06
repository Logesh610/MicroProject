import { TestBed } from '@angular/core/testing';

import { LogeshhService } from './logeshh.service';

describe('LogeshhService', () => {
  let service: LogeshhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogeshhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
