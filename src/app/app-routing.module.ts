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
import { GalleryThumbnailComponent } from './gallery/gallery-thumbnail/gallery-thumbnail.component';
import { InfoComponent } from './info/info.component';
import { FoodComponent } from './food/food.component';

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
  
  { path:'ncr/:categoryname', component: CategoryTypeComponent },
  
  { 
    path:'ncr/:alias/:id', 
    component: GalleryThumbnailComponent,
    children: [
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'order',
        component: FoodComponent,
      },
      { 
        path: '', 
        redirectTo:'info', 
        pathMatch: 'full'
      },
    ]
  },



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
