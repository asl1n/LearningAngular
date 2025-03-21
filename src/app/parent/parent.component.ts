import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  @ContentChildren(ChildComponent, {read: ChildComponent}) ChildComponents! : QueryList<ChildComponent>;

  ngAfterViewInit(){
    console.log(this.ChildComponents.length);
  }
}
