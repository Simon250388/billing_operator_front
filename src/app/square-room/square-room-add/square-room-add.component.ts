import { Component, Input, OnInit } from "@angular/core";
import { SquareRoomRowComponent } from "../square-room-row/square-room-row.component";
import { MatDialog } from "@angular/material/dialog";
import { FormArray, FormGroup } from "@angular/forms";
import { SquareTypeRow } from "src/app/model/square-type-row";
import { SquareTypeRowStoreService } from 'src/app/service/square-type-row/square-type-row-store.service';

@Component({
  selector: "app-square-room-add",
  templateUrl: "./square-room-add.component.html",
  styleUrls: ["./square-room-add.component.css"],
})
export class SquareRoomAddComponent {
  @Input() formArray: FormArray;

  constructor(
    private dialog: MatDialog,
    public store: SquareTypeRowStoreService) {}

  get squareItems() {
    return this.formArray.value;
  }

  displayedColumns = ["squareType", "squareValue", "rowAction"];

  openAddRowDialog(index?: number): void {
    let data: SquareTypeRow;

    if (index != null) {
      data = this.formArray.at(index).value as SquareTypeRow;
    }

    const dialogRef = this.dialog.open(SquareRoomRowComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (index != null && result) {
        this.formArray.at(index).setValue((result as FormGroup).value as SquareTypeRow);
      } else if (result) {
        this.formArray.push(result);
      }
    });
  }
}
