import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTecnicaComponent } from './lista-tecnica.component';

describe('ListaTecnicaComponent', () => {
  let component: ListaTecnicaComponent;
  let fixture: ComponentFixture<ListaTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTecnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
