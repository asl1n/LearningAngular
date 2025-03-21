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

  checkProfile: {
    new (): UserProfileComponent | AdminProfileComponent;
  } | null;

  async getProfileComponent(){
    if(this.adminDaju){
      const {AdminProfileComponent} = await import('./admin-profile/admin-profile.component');
    this.checkProfile = AdminProfileComponent;
    } else {
      const {UserProfileComponent} = await import('./user-profile/user-profile.component');
    }
    this.checkProfile = UserProfileComponent;
  }

  ngOnInit(){
    this.getProfileComponent();
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
