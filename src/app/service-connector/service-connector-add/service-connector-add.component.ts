import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceConnectorRowComponent } from '../service-connector-row/service-connector-row.component';

const CONNECTED_SERVICE_TEST_DATA: [] = [];

@Component({
  selector: 'app-service-connector-add',
  templateUrl: './service-connector-add.component.html',
  styleUrls: ['./service-connector-add.component.css']
})
export class ServiceConnectorAddComponent {

  constructor(private dialog: MatDialog) { }

  connectedServiceItems = CONNECTED_SERVICE_TEST_DATA;

  displayedColumns = ['service', 'provider', 'contractPointLocation', 'meterIsActive', 'rowAction']

  openAddRowDialog(rowData?: any): void {
    const dialogRef = this.dialog.open(ServiceConnectorRowComponent, {
      data: rowData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
