import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalcultaionListComponent } from "./component/calcultaion-list/calcultaion-list.component";


const routes: Routes = [
    { path: '', component: CalcultaionListComponent }
  ];
  

@NgModule({
    imports: [
      RouterModule.forChild(routes)
     
    ],
    exports: [RouterModule]
  })
export class CalculationRoutingModule {
}
