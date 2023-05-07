import { TestBed } from '@angular/core/testing';

import { ProjetRechercheService } from '../projet-recherche.service';

describe('ProjetRechercheService', () => {
  let service: ProjetRechercheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetRechercheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
