import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioComponente } from './servicio-componente';

describe('ServicioComponente', () => {
  let component: ServicioComponente;
  let fixture: ComponentFixture<ServicioComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
