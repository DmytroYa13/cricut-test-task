import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { colorsList } from '../shared/colors';
import { Color } from '../shared/interfaces/color.interface';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {

  @Output()
  private event: EventEmitter<Color> = new EventEmitter<Color>();

  public selectedColor!: Color;
  public colorsList: Color[] = colorsList
  public isPickerOpen: boolean = false;
  private formSubscription!: Subscription;

  public hexCodeForm!: FormGroup | null;

  public openColorPicker(): void {
    this.isPickerOpen = true;
  }

  public closeColorPicker(): void {
    if (this.isPickerOpen) {
      this.isPickerOpen = false;
      this.destroyHexForm();
    }
  }

  public selectColor(color: Color) {
    this.changeColor(color);
    this.setValueToForm(color);
  }

  private changeColor(color: Color): void {
    this.selectedColor = color;
    this.event.emit(color);
  }

  private setValueToForm(color: Color) {
    if(this.hexCodeForm) {
      this.hexCodeForm.patchValue({hexCode: color.colorName});
    }
  }

  toggleAdvancedForm(){
    if (this.hexCodeForm) {
      this.destroyHexForm();
    } else {
      this.initHexForm();
      this.onHexCodeFormSubscribe();
    }
  }

  private initHexForm(): void {
    this.hexCodeForm = new FormGroup({
      hexCode: new FormControl(
        this.selectedColor ? this.selectedColor.colorName : '#',
        [Validators.required, Validators.maxLength(7), Validators.pattern(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i)]
      )
    })
  }

  private destroyHexForm(){
    this.hexCodeForm = null;
    if(this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  private onHexCodeFormSubscribe() {
    if(this.hexCodeForm) {
      this.formSubscription = this.hexCodeForm!.valueChanges.subscribe(formValues => {
        if(this.hexCodeForm!.valid) {
          const color: Color = {
            colorID: formValues.hexCode,
            colorName: formValues.hexCode
          }
          this.changeColor(color);
        }
      })
    }
  }

}
