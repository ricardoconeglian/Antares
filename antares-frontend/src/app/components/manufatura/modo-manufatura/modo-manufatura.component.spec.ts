import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoManufaturaComponent } from './modo-manufatura.component';

describe('ModoManufaturaComponent', () => {
  let component: ModoManufaturaComponent;
  let fixture: ComponentFixture<ModoManufaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoManufaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModoManufaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
