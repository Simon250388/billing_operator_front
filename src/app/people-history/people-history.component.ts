import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PeopleHistory } from '../../store/models/people-history';

@Component({
  selector: 'app-people-history',
  templateUrl: './people-history.component.html',
  styleUrls: ['./people-history.component.css']
})
export class PeopleHistoryComponent implements OnInit {
  items: PeopleHistory[] = []

  displayedColumns = ['period', 'countResident', 'countPrescribed', 'countOwner']

  constructor(
    private location: Location) { }

  ngOnInit(): void {

  }

  backLocation(): void {
    this.location.back();
  }

}
