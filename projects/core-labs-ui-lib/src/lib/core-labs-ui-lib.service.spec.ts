import { TestBed } from '@angular/core/testing';

import { CoreLabsUiLibService } from './core-labs-ui-lib.service';

describe('CoreLabsUiLibService', () => {
  let service: CoreLabsUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreLabsUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
