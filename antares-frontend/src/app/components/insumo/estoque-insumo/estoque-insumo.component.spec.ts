import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueInsumoComponent } from './estoque-insumo.component';

describe('EstoqueInsumoComponent', () => {
  let component: EstoqueInsumoComponent;
  let fixture: ComponentFixture<EstoqueInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoqueInsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
