import { Component } from '@angular/core';
import { Color } from './shared/interfaces/color.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cricut';

  color!: Color;

  setColor(color: Color) {
    this.color = color;
  }
}
