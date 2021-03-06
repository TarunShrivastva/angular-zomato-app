import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { DetailsComponent } from './state/details/details.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NevbarComponent } from './nevbar/nevbar.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { RegistrationComponent } from './registration/registration.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookmarkedComponent } from './bookmarked/bookmarked.component';
import { CollectionComponent } from './collection/collection.component';
import { GalleryThumbnailComponent } from './gallery/gallery-thumbnail/gallery-thumbnail.component';
import { CategoryTypeComponent } from './category-type/category-type.component';
import { ReviewComponent } from './review/review.component';
import { SideSectionComponent } from './side-section/side-section.component';
import { InfoComponent } from './info/info.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    DetailsComponent,
    RegisterComponent,
    LoginComponent,
    NevbarComponent,
    HomeComponent,
    SkillsComponent,
    RegistrationComponent,
    TabbarComponent,
    GalleryComponent,
    BookmarkedComponent,
    CollectionComponent,
    GalleryThumbnailComponent,
    CategoryTypeComponent,
    ReviewComponent,
    SideSectionComponent,
    InfoComponent,
    FoodComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
