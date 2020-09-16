import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup} from "@angular/forms";
import {Address} from "./address";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements ControlValueAccessor {

  private address: FormGroup;

  public value: Address;

  private onChange;

  constructor(fb: FormBuilder) {
    this.address = fb.group({
      street: fb.control(''),
      zip: fb.control(''),
      city: fb.control(''),
      country: fb.control(''),
    });
  }

  registerOnChange(fn: any): void {
    this.address.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(address: Address): void {
    if (address) {
      this.address.setValue(address, { emitEvent: false });
    }
  }

}
