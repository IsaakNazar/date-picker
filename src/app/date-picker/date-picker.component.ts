import { Component, OnInit } from '@angular/core';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
    // other options are here...
  };

  model: IMyDateModel = null;

  constructor() { }

  ngOnInit() {}

  onDateChanged(event: IMyDateModel): void {
    // date selected
  }

}
