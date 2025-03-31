import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counter} from './NGRX/main/counter/counter.reducer';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GetterInputComponent } from './getter-input/getter-input.component';
import { PannelComponent } from './pannel/pannel.component';
import { CardComponent } from './card/card.component';
import { ColorButtonComponent } from './color-button/color-button.component';
import { LearningNGComponent } from './learning-ng/learning-ng.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { PlayingAroundComponent } from './playing-around/playing-around.component';
import { ViewExampleComponent } from './view-example/view-example.component';
import { HighlightDirective } from './highlight.directive';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { HostComponent } from './host/host.component';
import { CheckProfileComponent } from './check-profile/check-profile.component';
import { UserlistComponent } from './userlist/userlist.component';
import { LearningRxjsComponent } from './learning-rxjs/learning-rxjs.component';
import { MainComponent } from './NGRX/main/main.component';
import { formArrayComponent } from './form-array/form-array.component';
import { MeroFormComponent } from './mero-form/mero-form.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    DynamicComponent,
    HostComponent,
    CheckProfileComponent,
    UserlistComponent,
    LearningRxjsComponent,
    MainComponent,
    formArrayComponent,
    MeroFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counter }),
    ReactiveFormsModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
