import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNavbarComponent } from './cadastro-navbar.component';

describe('CadastroNavbarComponent', () => {
  let component: CadastroNavbarComponent;
  let fixture: ComponentFixture<CadastroNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
