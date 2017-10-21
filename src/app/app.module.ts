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
} from '@angular/material';
import { ChatRepairComponent } from './chat-repair/chat-repair.component';


@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    ChatRepairComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
      MatToolbarModule,
      MatSidenavModule,
      MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
