import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FacilitiesComponent} from '../facilities/facilities.component';

const routes: Routes = [
  {
      path: '',
      component: FacilitiesComponent,
  },
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
