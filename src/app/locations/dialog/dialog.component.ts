import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  places = [
    {
      name: 'Sha Tin Plaza',
      address: 'Elegant Tower, Block C, 21-27'
    },
    {
      name: 'New Town Plaza',
      address: '18 Sha Tin Centre St'
    },
    {
      name: 'Homesquare',
      address: '138 Sha Tin Rural Committee Rd'
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {}
}
