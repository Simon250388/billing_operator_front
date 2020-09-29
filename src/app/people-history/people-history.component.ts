import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { PeopleHistory } from '../model/people-history';
import { PeopleHistoryStoreService } from '../service/people-history/people-history-store.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-people-history',
  templateUrl: './people-history.component.html',
  styleUrls: ['./people-history.component.css']
})
export class PeopleHistoryComponent implements OnInit {
  keyRoomId:number;
  items: Observable<PeopleHistory[]>;

  displayedColumns = ['period', 'countResident', 'countPrescribed', 'countOwner']

  constructor(
    private location: Location,
    private router: ActivatedRoute,
    private peopleHistoryStore: PeopleHistoryStoreService) {
    this.peopleHistoryStore.load();
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.keyRoomId = Number.parseInt(params.get('id'));
      this.items = this.peopleHistoryStore.items.pipe(
        map(items => items.filter(row => row.keyRoomId == this.keyRoomId))
      );
    });
  }

  backLocation(): void {
    this.location.back();
  }

}
