import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoManufaturaComponent } from './lista-tipo-manufatura.component';

describe('ListaTipoManufaturaComponent', () => {
  let component: ListaTipoManufaturaComponent;
  let fixture: ComponentFixture<ListaTipoManufaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTipoManufaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTipoManufaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
