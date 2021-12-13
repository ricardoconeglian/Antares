import { TestBed } from '@angular/core/testing';

import { ApiModoManufaturaService } from './api-modo-manufatura.service';

describe('ApiModoManufaturaService', () => {
  let service: ApiModoManufaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiModoManufaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
