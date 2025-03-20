import { TestBed } from '@angular/core/testing';

import { RepoRankService } from './repo-rank.service';

describe('RepoRankService', () => {
  let service: RepoRankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoRankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
