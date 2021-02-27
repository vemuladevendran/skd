import { TestBed } from '@angular/core/testing';

import { SalesdataService } from './salesdata.service';

describe('SalesdataService', () => {
  let service: SalesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
