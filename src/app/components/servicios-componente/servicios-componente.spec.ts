import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosComponente } from './servicios-componente';

describe('ServiciosComponente', () => {
  let component: ServiciosComponente;
  let fixture: ComponentFixture<ServiciosComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
