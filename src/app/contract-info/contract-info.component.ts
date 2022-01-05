import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SimpleNumberChangeComponent } from '../change-value/simple-number-change/simple-number-change.component';
import { Customer } from '../../store/models/customer';


@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.css']
})
export class ContractInfoComponent {

  customer!: Customer;

  constructor(
    private dialog: MatDialog) {
    
  }

  setCurrentCustomer(): void {
   
  }

  showTotalSquareChangeDialog(totalSquare: number): void {
    this.showChangeNumberDialog(totalSquare).afterClosed().subscribe(result => {
      if (result) {
        this.customer.totalSquare = result;
      }
    });
  }


  showCountOwnerChangeDialog(countOwner: number): void {
    this.showChangeNumberDialog(countOwner).afterClosed().subscribe(result => {
      if (result) {
        this.customer.countOwner = result;
      }
    });
  }

  showCountPrescribedChangeDialog(countPrescribed: number): void {
    this.showChangeNumberDialog(countPrescribed).afterClosed().subscribe(result => {
      if (result) {
        this.customer.countPrescribed = result;
      }
    });
  }

  showCountResidentChangeDialog(countResident: number): void {
    this.showChangeNumberDialog(countResident).afterClosed().subscribe(result => {
      if (result) {
        this.customer.countResident = result;
      }
    });
  }

  private showChangeNumberDialog(curentValue: number): MatDialogRef<any, any> {
    return this.dialog.open(SimpleNumberChangeComponent, {
      data: curentValue
    });
  }
}
