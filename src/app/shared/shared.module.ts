import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
