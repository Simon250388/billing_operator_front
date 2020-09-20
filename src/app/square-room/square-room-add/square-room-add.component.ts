import { Component, Input, OnInit } from "@angular/core";
import { SquareRoomRowComponent } from "../square-room-row/square-room-row.component";
import { MatDialog } from "@angular/material/dialog";
import { FormArray } from "@angular/forms";
import { SquareTypeRow } from "src/app/model/square-type-row";

@Component({
  selector: "app-square-room-add",
  templateUrl: "./square-room-add.component.html",
  styleUrls: ["./square-room-add.component.css"],
})
export class SquareRoomAddComponent {
  @Input() formArray: FormArray;

  constructor(private dialog: MatDialog) {}

  get squareItems() {
    return this.formArray.value;
  }

  displayedColumns = ["squareType", "squareValue", "rowAction"];

  openAddRowDialog(rowData?: SquareTypeRow): void {
    const dialogRef = this.dialog.open(SquareRoomRowComponent, {
      data: rowData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result){
        this.formArray.push(result);
      }
    });
  }
}
