import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   leads = [
    {id: 1, name: 'Vikky'},
    {id: 2, name: 'doggy'},
    {id: 3, name: 'hairy'},
  ];
  userForm: FormGroup;
  constructor() {
  }

  ngOnInit() {
    
    setTimeout(() => {
      this.userForm = new FormGroup({
        radioControl: new FormControl()
      })
    }, 100)
   
  }
}
