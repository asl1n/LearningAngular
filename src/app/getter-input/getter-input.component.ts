import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-getter-input',
  templateUrl: './getter-input.component.html',
  styleUrls: ['./getter-input.component.scss']
})
export class GetterInputComponent {
  private _title: string = '';
  @Input()
  get title() {
    return this._title;
  }

  set title(value: string) {
    this._title = value.trim().toUpperCase();
  }
}
