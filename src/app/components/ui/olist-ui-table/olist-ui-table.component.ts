import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OlistDialogComponent } from '../olist-dialog/olist-dialog.component';

@Component({
  selector: 'app-olist-ui-table',
  templateUrl: './olist-ui-table.component.html',
  styleUrls: ['./olist-ui-table.component.scss']
})
export class OlistUiTableComponent implements OnInit {
  @Input() users;
  @Input() person;
  constructor(private router: Router, public dialog: MatDialog) { }
  ngOnInit() {
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }
  goToProfile(data: any) {
    if(!this.person.enableMentor){
      data.person = this.person;
      this.router.navigate(['/profile'], {state: data});
    }
  };

   toApply(newSeller: string){
    this.dialog.open(OlistDialogComponent, {
      data: {
        title: 'Enviado ',
        icon: "send",
        text: newSeller + ' irá analisar a sua candidatura. Aguarde contato.'
      }
    }); 
    }

   toAccept(mentor: string){
    this.dialog.open(OlistDialogComponent, {
      data: {
        title: 'Aceito ',
        icon: "done",
        text: 'Entre em contato e comece sua mentoria com ' + mentor
      }
    }); 
    }


}