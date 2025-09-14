import { TestBed } from '@angular/core/testing';

import { FormularioServicio } from './formulario-servicio';

describe('FormularioServicio', () => {
  let service: FormularioServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
