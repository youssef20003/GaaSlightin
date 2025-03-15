import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsArchivalComponent } from './jobs-archival.component';

describe('JobsArchivalComponent', () => {
  let component: JobsArchivalComponent;
  let fixture: ComponentFixture<JobsArchivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsArchivalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsArchivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
