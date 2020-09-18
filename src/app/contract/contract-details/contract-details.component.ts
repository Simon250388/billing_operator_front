import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Building } from 'src/app/model/building';
import { BuildingStoreService } from 'src/app/service/building-store.service';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {

  formGroup: FormGroup;


  buildings: Observable<Building[]>;

  constructor(
    private _formBuilder: FormBuilder,
    private _buildingStore: BuildingStoreService
  ) {
    this._buildingStore.load();
    this.buildings = this._buildingStore.items;
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      secondName: ['', Validators.required],
      firstName: ['', Validators.required],
      midleName: [''],
      buildingId: ['', Validators.required],
      roomId: [''],
      countOwner: [1, Validators.required],
      countPrescribed: [],
      countResidents: [],
      roomTypeId: [, Validators.required]
    });
  }  


  displayBuilding(value: Building): String {
    return value && value.present ? value.present : '';
  }
}
