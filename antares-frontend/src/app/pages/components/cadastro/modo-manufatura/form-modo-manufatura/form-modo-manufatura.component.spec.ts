import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModoManufaturaComponent } from './form-modo-manufatura.component';

describe('FormModoManufaturaComponent', () => {
  let component: FormModoManufaturaComponent;
  let fixture: ComponentFixture<FormModoManufaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModoManufaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModoManufaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
