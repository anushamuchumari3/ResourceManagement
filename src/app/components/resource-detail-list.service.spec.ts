import { TestBed } from '@angular/core/testing';

import { ResourceDetailListService } from './resource-detail-list.service';

describe('ResourceDetailListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceDetailListService = TestBed.get(ResourceDetailListService);
    expect(service).toBeTruthy();
  });
});
