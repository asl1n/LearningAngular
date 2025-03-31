import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    StoreModule.forFeature('posts', reducers)],
})
export class PostModule {}
