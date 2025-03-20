import { TestBed } from '@angular/core/testing';

import { GaasService } from './gaas.service';

describe('GaasService', () => {
  let service: GaasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
