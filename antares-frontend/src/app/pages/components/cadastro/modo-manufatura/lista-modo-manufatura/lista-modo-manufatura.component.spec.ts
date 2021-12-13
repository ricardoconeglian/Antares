import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaModoManufaturaComponent } from './lista-modo-manufatura.component';

describe('ListaModoManufaturaComponent', () => {
  let component: ListaModoManufaturaComponent;
  let fixture: ComponentFixture<ListaModoManufaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaModoManufaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaModoManufaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
