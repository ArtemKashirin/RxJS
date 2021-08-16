import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable/observable.component';
import { SubscriberComponent } from './observable/subscriber/subscriber.component';
import { SubscriptionComponent } from './observable/subscription/subscription.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { BehaviorSubjectComponent } from './observable/behavior-subject/behavior-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    SubscriberComponent,
    SubscriptionComponent,
    SubjectComponent,
    BehaviorSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
