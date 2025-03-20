import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GetterInputComponent } from './getter-input/getter-input.component';
import { PannelComponent } from './pannel/pannel.component';
import { CardComponent } from './card/card.component';
import { ColorButtonComponent } from './color-button/color-button.component';
import { LearningNGComponent } from './learning-ng/learning-ng.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GetterInputComponent,
    PannelComponent,
    CardComponent,
    ColorButtonComponent,
    LearningNGComponent,
    LifecycleHooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
