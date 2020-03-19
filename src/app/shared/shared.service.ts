import { Injectable } from '@angular/core';
import { GalleryThumbnail } from '../gallery/gallery-thumbnail/gallery-thumbnail.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  items: GalleryThumbnail[] = [];

  constructor() { }

}
