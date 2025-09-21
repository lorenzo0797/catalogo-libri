import { TestBed } from '@angular/core/testing';

import { BaseMenuService } from '../base-menu/base-menu-service';

describe('BaseMenuService', () => {
  let service: BaseMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
