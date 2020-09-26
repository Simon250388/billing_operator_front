import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { AfterViewInit, Compiler, Component, ComponentFactoryResolver, Injector } from '@angular/core';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { SideBarNavigationService } from './service/side-bar/side-bar-navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public currentPortal: Portal<any>;

  constructor(
   private sideBarNavigation: SideBarNavigationService) {
  }

  ngAfterViewInit(): void {
    this.sideBarNavigation.currentPortal.subscribe(portal => this.currentPortal = portal);
  }

  title = 'BillingOperator';
}
