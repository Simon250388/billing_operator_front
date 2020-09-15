import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprovementTypeAddComponent } from './improvement-type-add/improvement-type-add.component';



@NgModule({
  declarations: [
    ImprovementTypeAddComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImprovementTypeAddComponent
  ]
})
export class ImprovementTypeModule { }
