import { Component, Input, OnInit } from '@angular/core';
import { CalculationByService } from 'src/app/calculation-list/component/calcultaion-list/calcultaion-list.component';

@Component({
  selector: 'app-calculation-item-service',
  templateUrl: './calculation-item-service.component.html',
  styleUrls: ['./calculation-item-service.component.css']
})
export class CalculationItemServiceComponent {
  @Input() items: CalculationByService[] | undefined = []

}
