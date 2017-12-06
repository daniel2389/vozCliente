import { TestBed, inject } from '@angular/core/testing';

import { FiltrarInfoService } from './filtrar-info.service';

describe('FiltrarInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiltrarInfoService]
    });
  });

  it('should be created', inject([FiltrarInfoService], (service: FiltrarInfoService) => {
    expect(service).toBeTruthy();
  }));
});
