import { Component, OnInit, Input } from '@angular/core';

import { State } from '.././state-interface/state';
import { StateService } from '.././state.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() state: State;

  constructor(
    private route: ActivatedRoute,
    private stateService: StateService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getState();
  }

  getState(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.stateService.getStateById(id)
      .subscribe(state => this.state = state);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.stateService.updateState(this.state)
      .subscribe(() => this.goBack());
  }
}