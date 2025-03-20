import { Component, Input, ViewEncapsulation } from '@angular/core';
import { count, trimValue} from './profile.service';
import { GetterInputComponent } from '../getter-input/getter-input.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  inputs:['title', 'Hi', 'name', 'showcounter'],
})
export class ProfileComponent extends GetterInputComponent{
  @Input({required: true,transform: count, alias: 'Hi'}) count: number = 0;

  @Input({transform: trimValue}) name: string = '';

  @Input() showcounter: boolean = true;

  changeBtn(){
    this.showcounter = !this.showcounter;
  }
}
