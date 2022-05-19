import { Component, Input, OnInit } from '@angular/core';
import { CalculationItem } from 'src/app/calculation/calculation-list/component/calcultaion-list/calcultaion-list.component';


@Component({
  selector: 'app-calculation-item',
  templateUrl: './calculation-item.component.html',
  styleUrls: ['./calculation-item.component.css']
})
export class CalculationItemComponent {
  @Input() item: CalculationItem | undefined
}
