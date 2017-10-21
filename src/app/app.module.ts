import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { FacilitiesComponent } from './facilities/facilities.component';

import { AppRoutingModule } from './app-routing/app-routing.module';


import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';
import { ChatRepairComponent } from './chat-repair/chat-repair.component';
import { BubbleMenuComponent } from './bubble-menu/bubble-menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    ChatRepairComponent,
    BubbleMenuComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
      MatToolbarModule,
      MatSidenavModule,
      MatButtonModule,
      MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
