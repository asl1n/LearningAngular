import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
  testUsers = [
    {
    id: '1',
    name: 'Aslin Dai',
    age: '21'
  },
  {
    id: '2',
    name: 'Random Bhai',
    age: '22'
  },
  {
    id: '3',
    name: 'Arko Random',
    age: '24'
  },
]

removeUser(id: string) : void {
  this.testUsers = this.testUsers.filter(user => user.id !== id);
}


}
