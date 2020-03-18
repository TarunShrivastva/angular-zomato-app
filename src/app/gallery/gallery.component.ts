import { Component, OnInit } from '@angular/core';

import { Gallery } from './gallery.model';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  categories: Gallery[] = [];

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.getCategories(); 
  }

  getCategories(): void {
    this.galleryService.getCategories()
    .subscribe((categories:any) => {
      this.categories = categories;
    });
  }

  

}
