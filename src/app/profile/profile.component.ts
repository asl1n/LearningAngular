import { Component, Input, ViewEncapsulation } from '@angular/core';
import { count, trimValue } from './profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input({required: true,transform: count}) count: number = 0;

  @Input({transform: trimValue}) name: string = '';

  @Input() showcounter: boolean = true;

  changeBtn(){
    this.showcounter = !this.showcounter;
  }
}
