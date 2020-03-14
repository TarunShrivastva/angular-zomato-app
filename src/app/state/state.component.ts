import { Component, OnInit } from '@angular/core';

import { State } from './state-interface/state';
import { StateService } from './state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  states: State[] = [];
  
  user = { 
    'email' : 'tarun@gmail.om',
    'password': '11111111'  
  }

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.getStates(); 
  }
  
  //  this.stateService.loginUser(this.user); 
    
  getStates(): void {
    this.stateService.getStates()
    .subscribe(state => this.states = state);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.stateService.addState({ name } as State)
      .subscribe(state => {
        this.states.push(state);
      });
  }

  delete(state: State): void {
    this.states = this.states.filter(h => h !== state);
    this.stateService.deleteState(state).subscribe();
  }
}
