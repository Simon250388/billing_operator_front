import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImprovementTypeRowComponent } from '../improvement-type-row/improvement-type-row.component';

const IMPROVEMENT_TEST_DATA = [{
  service: {
    id: 1,
    present: 'Электроэнергия'
  },
  improvementType: {
    id: 1,
    present: 'Вид благоустройства'
  },
  rateGroup: {
    id: 1,
    present: 'Тарифная группа'
  }  
}]

@Component({
  selector: 'app-improvement-type-add',
  templateUrl: './improvement-type-add.component.html',
  styleUrls: ['./improvement-type-add.component.css']
})
export class ImprovementTypeAddComponent {

  constructor(private dialog: MatDialog) { }

  improvementItems = IMPROVEMENT_TEST_DATA;

  displayedColumns = ['service', 'improvementType', 'rateGroup', 'rowAction']

  openAddRowDialog(rowData?: any): void {
    const dialogRef = this.dialog.open(ImprovementTypeRowComponent, {
      data: rowData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
