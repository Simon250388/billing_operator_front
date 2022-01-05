import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StartChooseCurrentAction } from 'src/store/action/key-room.action';
import { IKeyRoom } from 'src/store/models/key-room.model';
import { getHistory } from 'src/store/selectors/key-room.selector';
import { IAppState } from 'src/store/state/app.state';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent {

  

}
