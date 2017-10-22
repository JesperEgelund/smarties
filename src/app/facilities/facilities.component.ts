import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {

  public chat = false;
  public note = false;

  constructor() { }

  ngOnInit() {
  }

  closeAll() {
    this.chat = false;
    this.note = false;
  }


}
