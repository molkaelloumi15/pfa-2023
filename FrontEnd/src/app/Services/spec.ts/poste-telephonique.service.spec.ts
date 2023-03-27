import { TestBed } from '@angular/core/testing';

import { PosteTelephoniqueService } from '../poste-telephonique.service';

describe('PosteTelephoniqueService', () => {
  let service: PosteTelephoniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosteTelephoniqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
