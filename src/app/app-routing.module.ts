import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './state/state.component';
import { DetailsComponent } from './state/details/details.component';

const routes: Routes = [
  { path: 'state', component: StateComponent},
  { path: 'state/detail/:id', component: DetailsComponent },
  { path: '', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
