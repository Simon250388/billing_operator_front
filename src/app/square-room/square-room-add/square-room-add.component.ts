import { Component, OnInit } from '@angular/core';
import { SquareRoomRowComponent } from '../square-room-row/square-room-row.component';
import { MatDialog } from '@angular/material/dialog';

const SQUARE_TEST_DATA = [{
  squareType: {
    id: 1,
    present: 'Общая площадь помещения'
  },
  value: 100
}]

@Component({
  selector: 'app-square-room-add',
  templateUrl: './square-room-add.component.html',
  styleUrls: ['./square-room-add.component.css']
})
export class SquareRoomAddComponent {

  constructor(private dialog: MatDialog) { }

  squareItems = SQUARE_TEST_DATA;

  displayedColumns = ['squareType', 'squareValue', 'rowAction']


  openAddRowDialog(rowData?: any): void {
    const dialogRef = this.dialog.open(SquareRoomRowComponent, {
      data: rowData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
