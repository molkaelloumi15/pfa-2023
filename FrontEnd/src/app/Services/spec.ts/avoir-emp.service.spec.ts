import { TestBed } from '@angular/core/testing';

import { AvoirEmpService } from '../avoir-emp.service';

describe('AvoirEmpService', () => {
  let service: AvoirEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvoirEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
