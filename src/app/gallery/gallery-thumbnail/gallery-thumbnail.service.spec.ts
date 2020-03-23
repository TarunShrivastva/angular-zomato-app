import { TestBed } from '@angular/core/testing';

import { GalleryThumbnailService } from './gallery-thumbnail.service';

describe('GalleryThumbnailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalleryThumbnailService = TestBed.get(GalleryThumbnailService);
    expect(service).toBeTruthy();
  });
});
