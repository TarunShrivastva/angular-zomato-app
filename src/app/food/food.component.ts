import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GalleryThumbnailService } from '../gallery/gallery-thumbnail/gallery-thumbnail.service';
import { GalleryThumbnail } from '../gallery/gallery-thumbnail/gallery-thumbnail.model';
import { SharedService } from '../shared/shared.service';
 
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foods: GalleryThumbnail[] = [];

  constructor(private galleryThumbnailService: GalleryThumbnailService, private route: ActivatedRoute
    ,private sharedService: SharedService ) { }

  ngOnInit() {
    this.getRestaurentId();
  }

  getRestaurentId(): void {
    this.galleryThumbnailService.getRestaurentById(this.route.parent.params._value.id)
    .subscribe((data:any) => {
      this.foods = data.foods;
    });
  }

  addItem(food:GalleryThumbnail):void {
    if (!food) { return; }
    this.sharedService.items.push(food);
  }

}
