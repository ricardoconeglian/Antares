import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucaoManufaturaComponent } from './execucao-manufatura.component';

describe('ExecucaoManufaturaComponent', () => {
  let component: ExecucaoManufaturaComponent;
  let fixture: ComponentFixture<ExecucaoManufaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecucaoManufaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecucaoManufaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
