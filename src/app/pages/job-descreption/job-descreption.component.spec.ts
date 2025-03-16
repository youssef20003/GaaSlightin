import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDescreptionComponent } from './job-descreption.component';

describe('JobDescreptionComponent', () => {
  let component: JobDescreptionComponent;
  let fixture: ComponentFixture<JobDescreptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDescreptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDescreptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
