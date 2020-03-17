import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';
import { GalleryComponent } from './gallery/gallery.component';
import { CollectionComponent } from './collection/collection.component';
import { BookmarkedComponent } from './bookmarked/bookmarked.component';
import { CategoryTypeComponent } from './category-type/category-type.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children: [
      {
        path: 'featured',
        component: GalleryComponent,
      },
      {
        path: 'bookmarked',
        component: BookmarkedComponent,
      },
      {
        path: 'me',
        component: CollectionComponent,
      },
      { 
        path: '', 
        redirectTo:'/featured', 
        pathMatch: 'full'
      },
    ]  
  },
  { path:'ncr/:type' ,component: CategoryTypeComponent },
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
