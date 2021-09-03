import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ObservableComponent} from './observable/observable.component';
import {SubscriberComponent} from "./subscriber/subscriber.component";
import {SubscriptionComponent} from './subscription/subscription.component';
import {SubjectsComponent} from './subjects/subjects.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { GenerativeComponent } from './functions/generative/generative.component';
import { AjaxComponent } from './functions/generative/ajax/ajax.component';
import { DeferComponent } from './functions/generative/defer/defer.component';
import { FromComponent } from './functions/generative/from/from.component';
import { OfComponent } from './functions/generative/of/of.component';
import { FromEventComponent } from './functions/generative/from-event/from-event.component';
import { GenerateComponent } from './functions/generative/generate/generate.component';
import { IntervalComponent } from './functions/generative/interval/interval.component';
import { TimerComponent } from './functions/generative/timer/timer.component';
import { RangeComponent } from './functions/generative/range/range.component';
import { ThrowErrorComponent } from './functions/generative/throw-error/throw-error.component';
import { IifComponent } from './functions/generative/iif/iif.component';
import { CombineLatestComponent } from './functions/union-generative/combine-latest/combine-latest.component';
import { ForkJoinComponent } from './functions/union-generative/fork-join/fork-join.component';
import { ConcatComponent } from './functions/union-generative/concat/concat.component';
import { MergeComponent } from './functions/union-generative/merge/merge.component';
import { PartitionComponent } from './functions/union-generative/partition/partition.component';
import { RaceComponent } from './functions/union-generative/race/race.component';
import { ZipComponent } from './functions/union-generative/zip/zip.component';
import { MergeMapToComponent } from './functions/operators/merge-map-to/merge-map-to.component';
import { ConcatMapToComponent } from './functions/operators/concat-map-to/concat-map-to.component';
import { SampleComponent } from './functions/operators/sample/sample.component';
import { SkipUntilComponent } from './functions/operators/skip-until/skip-until.component';
import { TakeUntilComponent } from './functions/operators/take-until/take-until.component';


@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    SubscriberComponent,
    SubscriptionComponent,
    SubjectsComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    GenerativeComponent,
    AjaxComponent,
    DeferComponent,
    FromComponent,
    OfComponent,
    FromEventComponent,
    GenerateComponent,
    IntervalComponent,
    TimerComponent,
    RangeComponent,
    ThrowErrorComponent,
    IifComponent,
    CombineLatestComponent,
    ForkJoinComponent,
    ConcatComponent,
    MergeComponent,
    PartitionComponent,
    RaceComponent,
    ZipComponent,
    MergeMapToComponent,
    ConcatMapToComponent,
    SampleComponent,
    SkipUntilComponent,
    TakeUntilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
