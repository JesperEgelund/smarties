import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

    notes = [
      {
        name: 'Water drainage repair work scheduled for everyday',
        updated: new Date('10/22/17'),
      },
      {
        name: 'We have a recieved a package for you - pick it up in Mngt Office within 5 days',
        updated: new Date('10/21/16'),
      }
    ];
  }

