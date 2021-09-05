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
import { ConcatMapComponent } from './functions/operators/concat-map/concat-map.component';
import { ExhaustMapComponent } from './functions/operators/exhaust-map/exhaust-map.component';
import { SwitchMapComponent } from './functions/operators/switch-map/switch-map.component';
import { MergeScanComponent } from './functions/operators/merge-scan/merge-scan.component';
import { AuditComponent } from './functions/operators/audit/audit.component';
import { DebounceComponent } from './functions/operators/debounce/debounce.component';
import { ThrottleComponent } from './functions/operators/throttle/throttle.component';
import { DelayWhenComponent } from './functions/operators/delay-when/delay-when.component';
import { MapComponent } from './functions/operators/map/map.component';
import { ScanComponent } from './functions/operators/scan/scan.component';
import { GroupByComponent } from './functions/operators/group-by/group-by.component';
import { DistinctComponent } from './functions/operators/distinct/distinct.component';
import { DistinctUntilChangedComponent } from './functions/operators/distinct-until-changed/distinct-until-changed.component';
import { FilterComponent } from './functions/operators/filter/filter.component';
import { FirstComponent } from './functions/operators/first/first.component';
import { LastComponent } from './functions/operators/last/last.component';
import { SingleComponent } from './functions/operators/single/single.component';
import { TakeWhileComponent } from './functions/operators/take-while/take-while.component';
import { SkipWhileComponent } from './functions/operators/skip-while/skip-while.component';
import { EveryComponent } from './functions/operators/every/every.component';
import { FindComponent } from './functions/operators/find/find.component';
import { FindIndexComponent } from './functions/operators/find-index/find-index.component';
import { CountComponent } from './functions/operators/count/count.component';
import { MaxComponent } from './functions/operators/max/max.component';
import { MinComponent } from './functions/operators/min/min.component';
import { ReduceComponent } from './functions/operators/reduce/reduce.component';
import { TapComponent } from './functions/operators/tap/tap.component';
import { TimeIntervalComponent } from './functions/operators/time-interval/time-interval.component';
import { TimestampComponent } from './functions/operators/timestamp/timestamp.component';
import { CatchErrorComponent } from './functions/operators/catch-error/catch-error.component';
import { RetryWhenComponent } from './functions/operators/retry-when/retry-when.component';
import { RetryComponent } from './functions/operators/retry/retry.component';


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
    ConcatMapComponent,
    ExhaustMapComponent,
    SwitchMapComponent,
    MergeScanComponent,
    AuditComponent,
    DebounceComponent,
    ThrottleComponent,
    DelayWhenComponent,
    MapComponent,
    ScanComponent,
    GroupByComponent,
    DistinctComponent,
    DistinctUntilChangedComponent,
    FilterComponent,
    FirstComponent,
    LastComponent,
    SingleComponent,
    TakeWhileComponent,
    SkipWhileComponent,
    EveryComponent,
    FindComponent,
    FindIndexComponent,
    CountComponent,
    MaxComponent,
    MinComponent,
    ReduceComponent,
    TapComponent,
    TimeIntervalComponent,
    TimestampComponent,
    CatchErrorComponent,
    RetryWhenComponent,
    RetryComponent,
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
