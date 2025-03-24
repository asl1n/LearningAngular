import { Component } from '@angular/core';
import { UserHaruService } from './user-haru.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
newUserName: string = '';
newUserAge: number = 0;

constructor(public userService: UserHaruService){}

removeUser(id: string) : void {
  this.userService.removeUser(id);
}

addUser() : void {
  this.userService.addUser(this.newUserName, this.newUserAge);
}

}
