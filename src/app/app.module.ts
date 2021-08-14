import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable/observable.component';
import { SubscriberComponent } from './observable/subscriber/subscriber.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    SubscriberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
