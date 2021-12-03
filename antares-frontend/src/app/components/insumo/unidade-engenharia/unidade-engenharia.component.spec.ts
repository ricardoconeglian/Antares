import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeEngenhariaComponent } from './unidade-engenharia.component';

describe('UnidadeEngenhariaComponent', () => {
  let component: UnidadeEngenhariaComponent;
  let fixture: ComponentFixture<UnidadeEngenhariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeEngenhariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeEngenhariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
