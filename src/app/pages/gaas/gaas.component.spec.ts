import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaasComponent } from './gaas.component';

describe('GaasComponent', () => {
  let component: GaasComponent;
  let fixture: ComponentFixture<GaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
