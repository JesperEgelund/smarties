import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FacilitiesComponent} from '../facilities/facilities.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

const routes: Routes = [
  { path: 'facilities', component: FacilitiesComponent },
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
