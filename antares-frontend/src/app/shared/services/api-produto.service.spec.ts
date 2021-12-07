import { TestBed } from '@angular/core/testing';

import { ApiProdutoService } from './api-produto.service';

describe('ApiProdutoService', () => {
  let service: ApiProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
