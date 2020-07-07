import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [DropdownComponent],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropdownComponent
  ]
})
export class SharedModule {

}
