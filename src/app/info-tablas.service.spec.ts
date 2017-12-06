import { TestBed, inject } from '@angular/core/testing';

import { InfoTablasService } from './info-tablas.service';

describe('InfoTablasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoTablasService]
    });
  });

  it('should be created', inject([InfoTablasService], (service: InfoTablasService) => {
    expect(service).toBeTruthy();
  }));
});
