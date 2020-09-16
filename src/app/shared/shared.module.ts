import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomizedSelectBoxComponent } from './customized-select-box/customized-select-box.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [CustomizedSelectBoxComponent, AddressComponent],
    exports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        CustomizedSelectBoxComponent,
        AddressComponent
    ]
})
export class SharedModule {

}
