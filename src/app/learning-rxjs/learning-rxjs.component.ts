import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, filter, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-learning-rxjs',
  templateUrl: './learning-rxjs.component.html',
  styleUrls: ['./learning-rxjs.component.scss']
})
export class LearningRxjsComponent {
  users = [
    {id:'1', name: 'Aslin', isActive: true},
    {id:'2', name: 'Daju', isActive: true},
    {id:'3', name: 'Random', isActive: true},
  ];

  user$ = new BehaviorSubject<{ id: string, name: string} | null>(null)
  documentClick$ = fromEvent(document, 'click');

  users$ = of(this.users);
  usernames$ = this.users$.pipe(
  map((users) => users.map((user) => user.name)))
  filteredUsers$ = this.users$.pipe(
  filter((user) => user.every((user) => user.isActive)));

  data$ = combineLatest([
    this.users$,
    this.usernames$,
    this.filteredUsers$
  ]).pipe(map(([users, usernames, filteredUsers]) => ({
    users, 
    usernames, 
    filteredUsers})));

  ngOnInit(): void{
    this.documentClick$.subscribe((e) =>{
      console.log(e);
    });

    setTimeout(() => {
      this.user$.next({id: '1', name: 'Aslin'})
    }, 2000)
    this.user$.subscribe((user) => {
      console.log('timro user:',user);
    });
  }
}
