import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GetterInputComponent } from './getter-input/getter-input.component';
import { PannelComponent } from './pannel/pannel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GetterInputComponent,
    PannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
