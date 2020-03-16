import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './state/state.component';
import { DetailsComponent } from './state/details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'test', component: SkillsComponent },
  { path: 'state', component: StateComponent},
  { path: 'state/detail/:id', component: DetailsComponent },
  { path: '', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
