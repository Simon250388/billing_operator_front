import { Component, Input } from '@angular/core';
import { CalculationAttachment } from 'src/app/calculation/calculation-list/component/calcultaion-list/calcultaion-list.component';

@Component({
  selector: 'app-calculation-attachments-list',
  templateUrl: './calculation-attachments-list.component.html',
  styleUrls: ['./calculation-attachments-list.component.css']
})
export class CalculationAttachmentsListComponent {

  @Input() items: CalculationAttachment[] | undefined = []

}


