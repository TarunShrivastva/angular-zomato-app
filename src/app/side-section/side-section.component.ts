import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared/shared.service'
import { GalleryThumbnail } from '../gallery/gallery-thumbnail/gallery-thumbnail.model';

@Component({
  selector: 'app-side-section',
  templateUrl: './side-section.component.html',
  styleUrls: ['./side-section.component.css']
})
export class SideSectionComponent implements OnInit {

  constructor(private sharedService: SharedService ) { }

  counts: number = 1;
  
  get items() {
    return this.sharedService.items;
  }

  ngOnInit() { }

  delete(foodId: number): void {
    console.log(foodId);
  }

  onIncrement(): void {
    this.counts += 1;
  }
   
  onDecrement(): void {
    this.counts -= 1;
  }

}
