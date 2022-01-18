import {Component, Input} from "@angular/core";
import {SquareRoomRowComponent} from "../square-room-row/square-room-row.component";
import {MatDialog} from "@angular/material/dialog";
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {SquareTypeRow} from "src/store/models/square-type-row";

@Component({
  selector: "app-square-room-add",
  templateUrl: "./square-room-add.component.html",
  styleUrls: ["./square-room-add.component.css"],
})
export class SquareRoomAddComponent {
  @Input()
  formArray!: AbstractControl;

  constructor(
    private dialog: MatDialog,
    private _formBuilder: FormBuilder) {
  }

  get squareItems() {
    return (<FormArray>this.formArray).value;
  }

  displayedColumns = ["squareType", "squareValue", "rowAction"];

  squareTypePresent(id: number): string {
    return "";
  }

  openAddRowDialog(index?: number): void {

    let data = undefined

    if (index == null) {

    } else {
      let data = (<FormArray>this.formArray).at(index).value as SquareTypeRow;
    }

    const dialogRef = this.dialog.open(SquareRoomRowComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (index != null && result) {
        (<FormArray>this.formArray).at(index).setValue((result as FormGroup).value as SquareTypeRow);
      } else if (result) {
        (<FormArray>this.formArray).push(result);
      }
    });
  }
}
