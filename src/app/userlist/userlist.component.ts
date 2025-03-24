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
hamroUsers: UserKoType[] = [];

constructor(public userService: UserHaruService){}

ngOnInit(): void {
  this.userService.getUsers().subscribe((users :UserKoType[]) => {
    this.hamroUsers = users;
  });
}
removeUser(id: string) : void {
  this.userService.removeUser(id).subscribe(() => {
    this.hamroUsers = this.hamroUsers.filter(user => user.id !== id);
  })
}

addUser(newUserName: string, newUserAge: number) : void {
  this.userService.addUser(this.newUserName, this.newUserAge).subscribe((newUser) => {
    this.hamroUsers.push(newUser);
  });
}

}
