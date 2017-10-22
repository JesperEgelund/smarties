import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FacilitiesComponent} from '../facilities/facilities.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { BookingsComponent } from '../facilities/bookings/bookings.component';
import { AlertsComponent } from '../facilities/alerts/alerts.component';
import { MaintenanceComponent } from '../facilities/maintenance/maintenance.component';
import { PaymentsComponent } from '../facilities/payments/payments.component';

const routes: Routes = [
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'facilities/benefits', component: PaymentsComponent },
  { path: 'facilities/alerts', component: AlertsComponent },
  { path: 'facilities/maintenance', component: MaintenanceComponent },
  { path: 'facilities/bookings', component: BookingsComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
