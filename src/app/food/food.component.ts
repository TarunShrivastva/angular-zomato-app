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

  private sub: any;

  private parentRouteId: number;

  constructor(private galleryThumbnailService: GalleryThumbnailService, private route: ActivatedRoute
    ,private sharedService: SharedService ) { }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.parentRouteId = +params["id"];
    });
    this.getRestaurentId();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getRestaurentId(): void {
    this.galleryThumbnailService.getRestaurentById(this.parentRouteId)
    .subscribe((data:any) => {
      this.foods = data.foods;
    });
  }

  addItem(food:GalleryThumbnail):void {
    if (!food) { return; }
    this.sharedService.items.push(food);
  }

}
