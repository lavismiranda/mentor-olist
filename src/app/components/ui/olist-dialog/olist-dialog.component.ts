import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  text: string;
  icon: string;
}


@Component({
  selector: 'app-olist-dialog',
  templateUrl: './olist-dialog.component.html',
  styleUrls: ['./olist-dialog.component.scss']
})
export class OlistDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
