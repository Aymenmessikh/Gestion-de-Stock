import { TestBed } from '@angular/core/testing';

import { UtlisateureService } from './utlisateure.service';

describe('UtlisateureService', () => {
  let service: UtlisateureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtlisateureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
