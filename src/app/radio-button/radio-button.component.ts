import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  leads;
  @Input() value
  isChecked: boolean

  constructor() {
  }

  ngOnInit() {
    this.leads = [
      {id: 1, name: 'Vikky'},
      {id: 2, name: 'doggy'},
      {id: 3, name: 'hairy'},
    ];
  }

  handleChange(evt) {
    this.isChecked = evt.target.checked;
  }

}
