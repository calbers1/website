import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProficienciesComponent } from './proficiencies/proficiencies.component';
import { MainBodyComponent } from './main-body/main-body.component';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ExperienceComponent } from './experience/experience.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { AboutMeComponent } from './about-me/about-me.component'; 



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent, 
    MainBodyComponent,
    ProficienciesComponent,
    ExperienceComponent,
    ReviewsComponent,
    CopyrightComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
