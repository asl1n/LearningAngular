import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input() isLeftSidebarCollapsed: boolean = false;
  @Input() screenWidth: number = 0;

  sizeClass(): string {
    if (this.isLeftSidebarCollapsed) {
      return '';
    }
    return this.screenWidth > 768 ? 'body-trimmed' : 'body-md-screen';
  }
}
