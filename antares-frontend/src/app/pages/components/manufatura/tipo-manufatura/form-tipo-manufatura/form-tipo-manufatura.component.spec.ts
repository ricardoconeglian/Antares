import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoManufaturaComponent } from './form-tipo-manufatura.component';

describe('FormTipoManufaturaComponent', () => {
  let component: FormTipoManufaturaComponent;
  let fixture: ComponentFixture<FormTipoManufaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTipoManufaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipoManufaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
