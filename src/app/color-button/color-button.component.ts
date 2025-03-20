import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-color-button',
  template: 'Click me to change color!',
  styles: [`
    :host {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      text-align: center;
    }
  `]
})
export class ColorButtonComponent { 
  @HostBinding('style.backgroundColor') bgColor = 'lightblue';

  @HostListener('click') changeColor() {
    this.bgColor = this.bgColor === 'lightblue' ? 'lightcoral' : 'lightblue';
  }
}
