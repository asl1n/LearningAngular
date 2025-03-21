import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SUBITEM } from '../subitem.token';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  // @ContentChildren(ChildComponent, {read: ChildComponent}) ChildComponents! : QueryList<ChildComponent>;
  @ContentChildren(SUBITEM) subItemType! : QueryList<string>;

  ngAfterViewInit(){
    // console.log(this.ChildComponents.length);
    // console.log(this.subItemType);
  }
  ngAfterContentInit(){
    this.subItemType.forEach((element) => {
      console.log(element);
    });
    
  }
  }
