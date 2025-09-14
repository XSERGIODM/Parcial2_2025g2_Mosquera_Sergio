import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPagina } from './proyectos-pagina';

describe('ProyectosPagina', () => {
  let component: ProyectosPagina;
  let fixture: ComponentFixture<ProyectosPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosPagina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosPagina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
