import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GalleryThumbnail } from './gallery-thumbnail.model';
import { GalleryThumbnailService } from './gallery-thumbnail.service';

@Component({
  selector: 'app-gallery-thumbnail',
  templateUrl: './gallery-thumbnail.component.html',
  styleUrls: ['./gallery-thumbnail.component.css']
})
export class GalleryThumbnailComponent implements OnInit {

  constructor(private galleryThumbnailService: GalleryThumbnailService, private route: ActivatedRoute) { }

  restaurents: GalleryThumbnail[] = [];

  ngOnInit() {
    this.getRestaurentById();
  }

  getRestaurentById(): void {
    this.galleryThumbnailService.getRestaurentById(this.route.snapshot.params.id)
    .subscribe((restaurents:any) => {
      this.restaurents = restaurents;
      console.log(this.restaurents);
    });
  }


}
