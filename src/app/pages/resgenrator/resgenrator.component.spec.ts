import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgenratorComponent } from './resgenrator.component';

describe('ResgenratorComponent', () => {
  let component: ResgenratorComponent;
  let fixture: ComponentFixture<ResgenratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResgenratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgenratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
