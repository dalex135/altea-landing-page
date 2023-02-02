import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainHeaderComponent } from './landing-page/main-header/main-header.component';
import { HowToDonateComponent } from './landing-page/how-to-donate/how-to-donate.component';
import { SchoolsDonorsComponent } from './landing-page/schools-donors/schools-donors.component';
import { AboutUsComponent } from './landing-page/about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WhatWeDoComponent } from "./landing-page/what-we-do/what-we-do.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';


@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        MainHeaderComponent,
        HowToDonateComponent,
        SchoolsDonorsComponent,
        AboutUsComponent,
        NavbarComponent,
        FooterComponent,
        WhatWeDoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        AgmCoreModule.forRoot({
          apiKey:'AIzaSyCNc1m1jxeRFvdnKllUpjQbhPNlY6tJveo',
        }),

    ]
})
export class AppModule { }
