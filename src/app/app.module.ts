
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { FacilitiesComponent } from './facilities/facilities.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';



import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material';
import { ChatRepairComponent } from './chat-repair/chat-repair.component';
import { BubbleMenuComponent } from './bubble-menu/bubble-menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BookingsComponent } from './facilities/bookings/bookings.component';
import { MaintenanceComponent } from './facilities/maintenance/maintenance.component';
import { PaymentsComponent } from './facilities/payments/payments.component';
import { AlertsComponent } from './facilities/alerts/alerts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationsComponent } from './locations/locations.component';
import { DialogComponent } from './locations/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    ChatRepairComponent,
    BubbleMenuComponent,
    LandingPageComponent,
    BookingsComponent,
    MaintenanceComponent,
    PaymentsComponent,
    AlertsComponent,
    NavbarComponent,
    LocationsComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
      MatToolbarModule,
      MatSidenavModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      MatDialogModule,
  ],
  entryComponents:
  [ DialogComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
