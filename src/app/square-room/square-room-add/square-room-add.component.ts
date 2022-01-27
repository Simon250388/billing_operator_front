import {Component, Input} from "@angular/core";
import {SquareRoomRowComponent} from "../square-room-row/square-room-row.component";
import {MatDialog} from "@angular/material/dialog";
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {SquareTypeRow, squareTypeValues} from "src/store/models/square-type-row";

@Component({
  selector: "app-square-room-add",
  templateUrl: "./square-room-add.component.html",
  styleUrls: ["./square-room-add.component.css"],
})
export class SquareRoomAddComponent {
  @Input()
  formArray!: FormArray;

  constructor(
    private dialog: MatDialog,
    private _formBuilder: FormBuilder) {
  }

  get squareItems() {
    return this.formArray.value as SquareTypeRow[];
  }

  displayedColumns = ["squareType", "squareValue", "rowAction"];

  squareTypePresent(id: string): string {
    return squareTypeValues().find(value => value.id == id)?.present || "";
  }

  openAddRowDialog(index?: number): void {

    let data;

    if (index != null) {
      data = this.formArray.at(index).value as SquareTypeRow;
    }

    const dialogRef = this.dialog.open(SquareRoomRowComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe((result: FormGroup) => {
      if (index != null && result) {
        this.formArray.at(index).setValue(result.value as SquareTypeRow);
      } else if (result) {
        this.formArray.push(result);
      }
    });
  }
}
