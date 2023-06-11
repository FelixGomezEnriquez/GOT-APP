import { TestBed } from '@angular/core/testing';

import { gotService } from './GOT.service';

describe('DcService', () => {
  let service: gotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(gotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
