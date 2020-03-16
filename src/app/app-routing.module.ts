import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';

// import { SkillsComponent } from './skills/skills.component';
// import { StateComponent } from './state/state.component';
// import { DetailsComponent } from './state/details/details.component';
// import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent },
  { path: '', redirectTo:'/', pathMatch: 'full'},
  
  // { path: 'skills', component: SkillsComponent, canActivate: [ AuthGuard ] },
  // { path: '**', component: PageNotFoundComponent }
  // { path: 'state', component: StateComponent},
  // { path: 'state/detail/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
