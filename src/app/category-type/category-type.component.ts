import { Component, OnInit } from '@angular/core';

import { CategoryType } from './category-type.model';
import { CategoryTypeService } from './category-type.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-type',
  templateUrl: './category-type.component.html',
  styleUrls: ['./category-type.component.css']
})
export class CategoryTypeComponent implements OnInit {
  categoryTypes: CategoryType[] = [];

  constructor(private categoryTypeService: CategoryTypeService, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.getRestaurentsByCategoryName();
  }

  getRestaurentsByCategoryName(): void {
    this.categoryTypeService.getRestaurentsByCategoryName(this.route.snapshot.params.categoryname)
    .subscribe((categoryTypes:any) => {
      this.categoryTypes = categoryTypes;
      console.log(this.categoryTypes);
    });
  }

}
