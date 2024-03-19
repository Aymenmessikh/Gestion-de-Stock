import { TestBed } from '@angular/core/testing';

import { FournisseureService } from './fournisseure.service';

describe('FournisseureService', () => {
  let service: FournisseureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FournisseureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
