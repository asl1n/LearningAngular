import { Component, ElementRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { PlayingAroundComponent } from '../playing-around/playing-around.component';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-view-example',
  templateUrl: './view-example.component.html',
  styleUrls: ['./view-example.component.scss']
})
export class ViewExampleComponent {
  @ViewChild('myRef', {static: true, read: ElementRef}) myRef!: ElementRef;
  @ViewChild('PlayingAroundComponent', {read: PlayingAroundComponent}) PlayingAroundComponent!: PlayingAroundComponent;
  @ViewChild('containerRef', {read:ViewContainerRef}) containerRef!: ViewContainerRef;
  @ViewChild('HighlightDirectieve', {read: HighlightDirective}) HighlightDirectieve!: HighlightDirective;
  
  
  ngAfterViewInit(){
    // console.log(this.PlayingAroundComponent.formPathau());
    // console.log('this is the Element:',this.myRef.nativeElement.textContent);
  console.log(this.myRef);
  console.log(this.PlayingAroundComponent);
  console.log(this.containerRef);
  console.log(this.HighlightDirectieve);
  
  }
}
