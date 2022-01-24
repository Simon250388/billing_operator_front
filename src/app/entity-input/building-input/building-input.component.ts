import {Component, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-building-input',
  templateUrl: './building-input.component.html',
  styleUrls: ['./building-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuildingInputComponent),
      multi: true
    }
  ]
})
export class BuildingInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
