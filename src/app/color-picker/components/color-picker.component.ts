import { Component, EventEmitter, Output } from '@angular/core';
import { Color } from 'src/app/shared/interfaces/color.interface';
import { colorsList } from '../consts/colors';
@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {

  @Output()
  private event: EventEmitter<Color> = new EventEmitter<Color>();

  readonly colorsList: Color[] = colorsList;
  public selectedColor!: Color;
  public isPickerOpen: boolean = false;

  public selectColor(color: Color): void {
    this.selectedColor = color;
    this.event.emit(color);
  }

  public openColorPicker(): void {
    this.isPickerOpen = true;
  }

  public closeColorPicker(): void {
    if (this.isPickerOpen) {
      this.isPickerOpen = false;
    }
  }







}
