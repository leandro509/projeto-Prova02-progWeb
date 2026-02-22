import { TestBed } from '@angular/core/testing';

import { ServiceCadastro } from './service-cadastro';

describe('ServiceCadastro', () => {
  let service: ServiceCadastro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCadastro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
