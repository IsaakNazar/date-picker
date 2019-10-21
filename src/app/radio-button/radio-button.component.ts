import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { RadioControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RadioButtonComponent)
    }
  ]

})
export class RadioButtonComponent  extends RadioControlValueAccessor  {

  // leads;
  // @Input() value
  @Input() controlFormName
  // @Input() group: FormGroup; 

  // constructor() {
  // }

  // ngOnInit() {
  //   // this.leads = [
  //   //   {id: 1, name: 'Vikky'},
  //   //   {id: 2, name: 'doggy'},
  //   //   {id: 3, name: 'hairy'},
  //   // ];
  // }

  // handleChange(evt) {
  //   this.isChecked = evt.target.checked;
  // }

  registerOnChange(fn) {
    this.onChange = fn
  }

  writeValue(value) {
    console.log(value)
  }

  registerOnTouched(fn) {
    this.onTouched = fn
  }

  selectType() {
    console.log('value', this.value);
    
  }

}
