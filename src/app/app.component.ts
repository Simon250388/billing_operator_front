import { Portal } from '@angular/cdk/portal';
import { AfterViewInit, Component} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SideBarNavigationService } from './service/side-bar/side-bar-navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public currentPortal: Portal<any>;

  constructor(
    private domSanitizer: DomSanitizer, 
    private matIconRegistry: MatIconRegistry,
    private sideBarNavigation: SideBarNavigationService) {
      this.matIconRegistry.addSvgIcon("logo",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/logo.svg"));
  }

  ngAfterViewInit(): void {
    this.sideBarNavigation.currentPortal.subscribe(portal => this.currentPortal = portal);
  }

  title = 'BillingOperator';
}
