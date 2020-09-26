import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { Compiler, ComponentFactoryResolver, Injectable, Injector, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContractInfoComponent } from 'src/app/contract/contract-info/contract-info.component';
import { SearchCustomerComponent } from 'src/app/search-customer/search-customer.component';
import { CutomerNavigationService } from '../customer/cutomer-navigation.service';

@Injectable({
  providedIn: 'root'
})
export class SideBarNavigationService {
  private _currentPortal: Portal<any>;
  private _subject: BehaviorSubject<Portal<any>> = new BehaviorSubject(undefined);

  get currentPortal() {
    return this._subject.asObservable();
  }

  constructor(private compiler: Compiler,
    private injector: Injector,
    private cutomerNavigation: CutomerNavigationService) {

      this.cutomerNavigation.currentCustomer.subscribe(customer => {
        if (customer) {
          this.contractInfoComponentFactoryResolver().then(factoryResolver => {
            this._currentPortal = new ComponentPortal(ContractInfoComponent, null, this.injector, factoryResolver);
            this._subject.next(this._currentPortal);
          });
        } else {
          this.searchCustomerComponentFactoryResolver().then(factoryResolver => {
            this._currentPortal = new ComponentPortal(SearchCustomerComponent, null, this.injector, factoryResolver);
            this._subject.next(this._currentPortal);
          });
        }
      })    
  } 

  async searchCustomerComponentFactoryResolver(): Promise<ComponentFactoryResolver> {
    let factoryResolver: ComponentFactoryResolver
    // Dynamic import, activate code splitting and on demand loading of feature module
    await import('../../search-customer/search-customer.module').then(m => m.SearchCustomerModule).then(module => {
      this.compiler.compileModuleAsync(module).then(moduleFactory => {
        // Create a moduleRef, resolve an entry component, create the component
        const moduleRef = moduleFactory.create(this.injector);
        factoryResolver = moduleRef.componentFactoryResolver;
      })
    });
    return factoryResolver;
  }

  async contractInfoComponentFactoryResolver(): Promise<ComponentFactoryResolver> {
    let factoryResolver: ComponentFactoryResolver
    // Dynamic import, activate code splitting and on demand loading of feature module
    await import('../../contract/contract.module').then(m => m.ContractModule).then(module => {
      this.compiler.compileModuleAsync(module).then(moduleFactory => {
        // Create a moduleRef, resolve an entry component, create the component
        const moduleRef = moduleFactory.create(this.injector);
        factoryResolver = moduleRef.componentFactoryResolver;
      })
    });
    return factoryResolver;
  }
}
