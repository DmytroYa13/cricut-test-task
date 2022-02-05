import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { ClickOutsideDirective } from '../shared/directive/click-outside.directive';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ColorPickerComponent,
    ClickOutsideDirective,
  ],
  exports: [
    ColorPickerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ColorPickerModule { }
