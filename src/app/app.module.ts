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
