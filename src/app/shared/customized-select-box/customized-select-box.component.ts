import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, SelectControlValueAccessor} from "@angular/forms";

export interface SelectItem {
  value: number;
  text: string;
}

@Component({
  selector: 'app-genre-select',
  templateUrl: './customized-select-box.component.html',
  styleUrls: ['./customized-select-box.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomizedSelectBoxComponent),
    multi: true,
  }]
})
export class CustomizedSelectBoxComponent implements ControlValueAccessor {

  @Input()
  items: SelectItem[] = [];

  constructor() { }

  public selectedValue: number;

  private onChange;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: number): void {
    const item: SelectItem = this.items.find((item: SelectItem) => item.value == value);
    if (item) {
      this.selectedValue = item.value;
    }
  }

  selectItem(item: number): void {
    this.onChange(item);
    console.log(item);
    this.selectedValue = item;
  }
}
