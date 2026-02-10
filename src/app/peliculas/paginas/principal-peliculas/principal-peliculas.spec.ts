import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPeliculas } from './principal-peliculas';

describe('PrincipalPeliculas', () => {
  let component: PrincipalPeliculas;
  let fixture: ComponentFixture<PrincipalPeliculas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalPeliculas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalPeliculas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
