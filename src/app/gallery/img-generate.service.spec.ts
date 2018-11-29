import { TestBed } from '@angular/core/testing';

import { ImgGenerateService } from './img-generate.service';

describe('ImgGenerateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgGenerateService = TestBed.get(ImgGenerateService);
    expect(service).toBeTruthy();
  });
});
