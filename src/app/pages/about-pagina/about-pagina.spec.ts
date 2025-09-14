import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPagina } from './about-pagina';

describe('AboutPagina', () => {
  let component: AboutPagina;
  let fixture: ComponentFixture<AboutPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPagina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPagina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
