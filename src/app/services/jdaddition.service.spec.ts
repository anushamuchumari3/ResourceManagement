import { TestBed } from '@angular/core/testing';

import { JDAdditionService } from './jdaddition.service';

describe('JDAdditionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JDAdditionService = TestBed.get(JDAdditionService);
    expect(service).toBeTruthy();
  });
});
