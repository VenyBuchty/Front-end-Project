import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { VideoComponent } from './video/video.component';
import { CoursesComponent } from './courses/courses.component';
import { ReviewComponent } from './review/review.component';
import { TrainerComponent } from './trainer/trainer.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';
import { OverviewComponent } from './overview/overview.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { FullstackComponent } from './fullstack/fullstack.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    NewsfeedComponent,
    VideoComponent,
    CoursesComponent,
    ReviewComponent,
    TrainerComponent,
    LocationComponent,
    FooterComponent,
    OverviewComponent,
    FrontendComponent,
    BackendComponent,
    FullstackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
