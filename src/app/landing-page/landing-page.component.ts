import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('slideAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in')),
    ]),
  ]
})
export class LandingPageComponent implements OnInit {

  state = 'small';

  constructor() { }

  ngOnInit() {
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
}
}
