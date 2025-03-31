import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  constructor(private store: Store){}
}
