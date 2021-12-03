import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoManufaturaComponent } from './tipo-manufatura.component';

describe('TipoManufaturaComponent', () => {
  let component: TipoManufaturaComponent;
  let fixture: ComponentFixture<TipoManufaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoManufaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoManufaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
