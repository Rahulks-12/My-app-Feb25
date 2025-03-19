import { TestBed } from '@angular/core/testing';

import { FlipkartapiService } from './flipkartapi.service';

describe('FlipkartapiService', () => {
  let service: FlipkartapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
