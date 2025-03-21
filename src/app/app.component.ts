import { Component, QueryList, ViewChildren } from '@angular/core';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Docs-Follow';
  value: number= 10;
  receivedDataFromChild= '';
  isActive : boolean = true;
  tasks = ['task1', 'task2', 'task3', 'task4', 'task5'];
  adminDaju= true;

  @ViewChildren(TaskcomponentComponent) taskComponents !:QueryList <TaskcomponentComponent>;

  getProfileComponent(){
    return this.adminDaju? AdminProfileComponent : UserProfileComponent;
  }

  ngAfterViewInit(){
    // console.log(this.taskComponents.map(task => task.taskName));
    this.taskComponents.forEach(task => console.log(task.taskName));
    this.taskComponents.changes.subscribe(()=>{
      console.log('Changes in tasks arr');
    });
    setTimeout(() => {
      this.tasks.push('task6');
    },3000);
  }

  dataReceived(data : string){
    this.receivedDataFromChild = data;
  }
  destroyHook(){
    this.isActive = !this.isActive;
  }
}
