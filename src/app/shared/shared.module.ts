import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomizedSelectBoxComponent } from './customized-select-box/customized-select-box.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [CustomizedSelectBoxComponent],
    exports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        CustomizedSelectBoxComponent
    ]
})
export class SharedModule {

}
