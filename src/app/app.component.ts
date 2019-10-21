import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // leads;
  // userForm: FormGroup;
  constructor() {
  }

  ngOnInit() {
    // this.leads = [
    //   {id: 1, name: 'Vikky'},
    //   {id: 2, name: 'doggy'},
    //   {id: 3, name: 'hairy'},
    // ];
    //
    // this.userForm = new FormGroup({
    //   radio_button: new FormControl('')
    // })
  }
}
