import { TestBed } from '@angular/core/testing';

import { ApiTipoManufaturaService } from './api-tipo-manufatura.service';

describe('ApiTipoManufaturaService', () => {
  let service: ApiTipoManufaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTipoManufaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
