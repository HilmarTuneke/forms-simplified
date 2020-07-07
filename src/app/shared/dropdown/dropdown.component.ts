import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormControl } from '@angular/forms';

export interface DropdownItem {
  id: number;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true,
  }],
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() id: string;
  @Input() items: DropdownItem[];

  public value: any;

  private onChange;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }


  writeValue(value: number): void {
    const item = this.items.find((item: DropdownItem) => item.id == value);
    if (item) {
      this.value = item.id;
    }
  }

  selectItem(item): void {
    this.onChange(item);
    this.value = item;
  }
}
