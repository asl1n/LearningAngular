import { Injectable } from '@angular/core';
import { UserKoType } from './UserKoType';

@Injectable({
  providedIn: 'root'
})
export class UserHaruService {
  testUsers : UserKoType[] = [
    { id: '1', name: 'Aslin Dai', age: 21 },
    { id: '2', name: 'Random Bhai', age: 22 },
    { id: '3', name: 'Arko Random', age: 24 },
  ];

  constructor() {}

  removeUser(id: string): void {
    this.testUsers = this.testUsers.filter(user => user.id !== id);
    console.log('User removed:', id);
  }

  addUser(name: string, age: number): void {
    if (!name || age <= 0) {
      window.alert('Invalid input');
      return;
    }
    this.testUsers.push({
      id: (this.testUsers.length + 1).toString(),
      name,
      age
    });
    console.log('User added:', name);
  }
}
