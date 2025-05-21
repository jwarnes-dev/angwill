import { TestBed } from '@angular/core/testing';

import { AngularWillowService } from './angular-willow.service';

describe('AngularWillowService', () => {
  let service: AngularWillowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularWillowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
