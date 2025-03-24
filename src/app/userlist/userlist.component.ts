import { Component } from '@angular/core';
import { UserHaruService } from './user-haru.service';
import { UserKoType } from './UserKoType';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
newUserName: string = '';
newUserAge: number = 0;
testUsers: UserKoType[] = [];

constructor(public userService: UserHaruService){}

ngOnInit(): void {
  this.userService.getUsers().subscribe(users => {
    this.testUsers = users;
  });
}
removeUser(id: string) : void {
  this.userService.removeUser(id);
}

addUser() : void {
  this.userService.addUser(this.newUserName, this.newUserAge);
}

}
