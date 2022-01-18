import {Component, Input, OnInit} from '@angular/core';
import {IServiceSimpleModel} from "../../../store/models/service-simple.model";


@Component({
  selector: 'app-simple-service',
  templateUrl: './simple-service.component.html',
  styleUrls: ['./simple-service.component.css']
})
export class SimpleServiceComponent implements OnInit {

  @Input() item!: IServiceSimpleModel;

  constructor() { }

  ngOnInit() {
  }

}
