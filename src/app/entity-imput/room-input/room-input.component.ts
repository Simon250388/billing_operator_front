import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BaseInputComponent } from 'src/app/base/base-input-component';
import { Room } from 'src/app/model/room';
import { RoomStoreService } from 'src/app/service/room/room-store.service';

@Component({
  selector: 'app-room-input',
  templateUrl: './room-input.component.html',
  styleUrls: ['./room-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RoomInputComponent),
      multi: true
    }
  ]
})
export class RoomInputComponent extends BaseInputComponent<Room> implements OnInit, ControlValueAccessor {

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() lbl: string;
  @Input() placeholder: string;

  @Input() buildingId: number = 1;

  filtrItems: Observable<Room[]>;

  constructor(protected storeService: RoomStoreService) {
    super(storeService);
  }
  ngOnInit(): void {
    this.filtrItems = this.items.pipe(
      map(items => items.filter(row=> row.buildingId == this.buildingId))
    )    
  }
}
