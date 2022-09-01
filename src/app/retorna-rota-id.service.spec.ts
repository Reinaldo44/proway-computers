import { TestBed } from '@angular/core/testing';

import { RetornaRotaIdService } from './retorna-rota-id.service';

describe('RetornaRotaIdService', () => {
  let service: RetornaRotaIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetornaRotaIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
