import { Component, OnInit, Input } from '@angular/core';

export interface DropdownItems {
  id: number;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() id: string;
  @Input() items: DropdownItems;
  constructor() { }

  ngOnInit(): void {
  }

}
