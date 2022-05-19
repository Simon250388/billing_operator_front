import { Component, Input, OnInit } from '@angular/core';
import { CalculationAttachment } from 'src/app/calculation-list/component/calcultaion-list/calcultaion-list.component';

@Component({
  selector: 'app-calculation-attachment',
  templateUrl: './calculation-attachment.component.html',
  styleUrls: ['./calculation-attachment.component.css']
})
export class CalculationAttachmentComponent {

  @Input() item: CalculationAttachment | undefined

}
