import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-square-room-row',
  templateUrl: './square-room-row.component.html',
  styleUrls: ['./square-room-row.component.css']
})
export class SquareRoomRowComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public rowData: []
    ) { }

  ngOnInit(): void {
  }

}
