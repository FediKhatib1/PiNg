import { TestBed } from '@angular/core/testing';

import { AdminreclamationService } from './adminreclamation.service';

describe('AdminreclamationService', () => {
  let service: AdminreclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminreclamationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
