import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoRankComponent } from './repo-rank.component';

describe('RepoRankComponent', () => {
  let component: RepoRankComponent;
  let fixture: ComponentFixture<RepoRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoRankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
