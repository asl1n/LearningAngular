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
import { PlayingAroundComponent } from './playing-around/playing-around.component';
import { FormsModule } from '@angular/forms';
import { ViewExampleComponent } from './view-example/view-example.component';
import { HighlightDirective } from './highlight.directive';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

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
    PlayingAroundComponent,
    ViewExampleComponent,
    HighlightDirective,
    TaskcomponentComponent,
    ParentComponent,
    ChildComponent,
    AdminProfileComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
