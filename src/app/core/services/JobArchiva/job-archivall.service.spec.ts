import { TestBed } from '@angular/core/testing';

import { JobArchivallService } from './job-archivall.service';

describe('JobArchivallService', () => {
  let service: JobArchivallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobArchivallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
