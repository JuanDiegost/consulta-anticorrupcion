import { TestBed, inject } from '@angular/core/testing';

import { ConsultaServicesService } from './consulta-services.service';

describe('ConsultaServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaServicesService]
    });
  });

  it('should be created', inject([ConsultaServicesService], (service: ConsultaServicesService) => {
    expect(service).toBeTruthy();
  }));
});
