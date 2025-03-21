import { Component, ComponentRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent {
  @ViewChild('containerRef', {read:ViewContainerRef}) placeholder!: ViewContainerRef;
  @ViewChild('changeRef', {read:ViewContainerRef}) changeholder!: ViewContainerRef;
  @ViewChild('changeRef', { read: ElementRef }) changeText!: ElementRef;

  constructor(private ViewContainerRef: ViewContainerRef){}
  // ngOnInit(){
  //   this.ViewContainerRef.createComponent(DynamicComponent);
  // }
  ngAfterViewInit(){
    this.placeholder.createComponent(DynamicComponent);
    
    setTimeout(() => {
      this.changeText.nativeElement.textContent = '';
      this.changeholder.createComponent(DynamicComponent);
    },2000);
  }
}
