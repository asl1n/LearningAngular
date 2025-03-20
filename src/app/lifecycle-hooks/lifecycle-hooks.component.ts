import { Component, DestroyRef, ElementRef, Input, SimpleChange, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss'],
})
export class LifecycleHooksComponent {
  @Input() message: string = '';
  @ViewChild('Aslin') AslinElement!: ElementRef
  loading : boolean = true;
  constructor(private destroyRef: DestroyRef) {
    destroyRef.onDestroy(() => {
        console.log('Destroy REF');
      });
    console.log("Constructor called");
  }

  ngOnInit(){
    console.log("ngOnInit called");
  }
  ngOnChanges(changes: SimpleChange) {
    console.log('input changed:', changes);
  }

  ngDoCheck(){
    console.log('changes made');
  }

  ngAfterViewInit(){
    console.log(this.AslinElement.nativeElement);
    setTimeout(() => {
    this.loading = false;
  }, 1000);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
    if (this.AslinElement) {
      const position = this.AslinElement.nativeElement.getBoundingClientRect();
      console.log('Element position:', position);

      console.log('Loading state:', this.loading);
    }
  }

  ngOnDestroy(){
    console.log('Destroyed');
  }


}
