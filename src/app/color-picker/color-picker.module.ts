import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../shared/directive/click-outside.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerComponent } from './components/color-picker.component';


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
