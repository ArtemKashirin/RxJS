import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ObservableComponent} from './observable/observable.component';
import {SubscriberComponent} from "./subscriber/subscriber.component";
import {SubscriptionComponent} from './subscription/subscription.component';
import {SubjectsComponent} from './subjects/subjects.component';
import {BehaviorSubjectComponent} from './behavior-subject/behavior-subject.component';
import {ReplaySubjectComponent} from './replay-subject/replay-subject.component';
import {AsyncSubjectComponent} from './async-subject/async-subject.component';
import {GenerativeComponent} from './functions/generative/generative.component';
import {AjaxComponent} from './functions/generative/ajax/ajax.component';
import {DeferComponent} from './functions/generative/defer/defer.component';
import {FromComponent} from './functions/generative/from/from.component';
import {OfComponent} from './functions/generative/of/of.component';
import {FromEventComponent} from './functions/generative/from-event/from-event.component';
import {GenerateComponent} from './functions/generative/generate/generate.component';
import {IntervalComponent} from './functions/generative/interval/interval.component';
import {TimerComponent} from './functions/generative/timer/timer.component';
import {RangeComponent} from './functions/generative/range/range.component';
import {ThrowErrorComponent} from './functions/generative/throw-error/throw-error.component';
import {IifComponent} from './functions/generative/iif/iif.component';
import {CombineLatestComponent} from './functions/union-generative/combine-latest/combine-latest.component';
import {ForkJoinComponent} from './functions/union-generative/fork-join/fork-join.component';
import {ConcatComponent} from './functions/union-generative/concat/concat.component';
import {MergeComponent} from './functions/union-generative/merge/merge.component';
import {PartitionComponent} from './functions/union-generative/partition/partition.component';
import {RaceComponent} from './functions/union-generative/race/race.component';
import {ZipComponent} from './functions/union-generative/zip/zip.component';
import {MergeMapToComponent} from './functions/operators/merge-map-to/merge-map-to.component';
import {ConcatMapToComponent} from './functions/operators/concat-map-to/concat-map-to.component';
import {SampleComponent} from './functions/operators/sample/sample.component';
import {SkipUntilComponent} from './functions/operators/skip-until/skip-until.component';
import {TakeUntilComponent} from './functions/operators/take-until/take-until.component';
import {ConcatMapComponent} from './functions/operators/concat-map/concat-map.component';
import {ExhaustMapComponent} from './functions/operators/exhaust-map/exhaust-map.component';
import {SwitchMapComponent} from './functions/operators/switch-map/switch-map.component';
import {MergeScanComponent} from './functions/operators/merge-scan/merge-scan.component';
import {AuditComponent} from './functions/operators/audit/audit.component';
import {DebounceComponent} from './functions/operators/debounce/debounce.component';
import {ThrottleComponent} from './functions/operators/throttle/throttle.component';
import {DelayWhenComponent} from './functions/operators/delay-when/delay-when.component';
import {MapComponent} from './functions/operators/map/map.component';
import {ScanComponent} from './functions/operators/scan/scan.component';
import {GroupByComponent} from './functions/operators/group-by/group-by.component';
import {DistinctComponent} from './functions/operators/distinct/distinct.component';
import {DistinctUntilChangedComponent} from './functions/operators/distinct-until-changed/distinct-until-changed.component';
import {FilterComponent} from './functions/operators/filter/filter.component';
import {FirstComponent} from './functions/operators/first/first.component';
import {LastComponent} from './functions/operators/last/last.component';
import {SingleComponent} from './functions/operators/single/single.component';
import {TakeWhileComponent} from './functions/operators/take-while/take-while.component';
import {SkipWhileComponent} from './functions/operators/skip-while/skip-while.component';
import {EveryComponent} from './functions/operators/every/every.component';
import {FindComponent} from './functions/operators/find/find.component';
import {FindIndexComponent} from './functions/operators/find-index/find-index.component';
import {CountComponent} from './functions/operators/count/count.component';
import {MaxComponent} from './functions/operators/max/max.component';
import {MinComponent} from './functions/operators/min/min.component';
import {ReduceComponent} from './functions/operators/reduce/reduce.component';
import {TapComponent} from './functions/operators/tap/tap.component';
import {TimeIntervalComponent} from './functions/operators/time-interval/time-interval.component';
import {TimestampComponent} from './functions/operators/timestamp/timestamp.component';
import {CatchErrorComponent} from './functions/operators/catch-error/catch-error.component';
import {RetryWhenComponent} from './functions/operators/retry-when/retry-when.component';
import {RetryComponent} from './functions/operators/retry/retry.component';
import {ExpandComponent} from './functions/operators/expand/expand.component';
import {BufferComponent} from './functions/operators/buffer/buffer.component';
import {BufferWhenComponent} from './functions/operators/buffer-when/buffer-when.component';
import {BufferCountComponent} from './functions/operators/buffer-count/buffer-count.component';
import {BufferTimeComponent} from './functions/operators/buffer-time/buffer-time.component';
import {WindowComponent} from './functions/operators/window/window.component';
import {WindowTimeComponent} from './functions/operators/window-time/window-time.component';
import {WindowCountComponent} from './functions/operators/window-count/window-count.component';
import {WindowWhenComponent} from './functions/operators/window-when/window-when.component';
import {AuditTimeComponent} from './functions/operators/audit-time/audit-time.component';
import {DebounceTimeComponent} from './functions/operators/debounce-time/debounce-time.component';
import {ElementAtComponent} from './functions/operators/element-at/element-at.component';
import {SampleTimeComponent} from './functions/operators/sample-time/sample-time.component';
import {SkipComponent} from './functions/operators/skip/skip.component';
import {SkipLastComponent} from './functions/operators/skip-last/skip-last.component';
import {TakeComponent} from './functions/operators/take/take.component';
import {TakeLastComponent} from './functions/operators/take-last/take-last.component';
import {ThrottleTimeComponent} from './functions/operators/throttle-time/throttle-time.component';
import {DistinctUntilKeyChangedComponent} from './functions/operators/distinct-until-key-changed/distinct-until-key-changed.component';
import {IgnoreElementsComponent} from './functions/operators/ignore-elements/ignore-elements.component';
import {ConcatAllComponent} from './functions/operators/concat-all/concat-all.component';
import {MergeAllComponent} from './functions/operators/merge-all/merge-all.component';
import {WithLatestFromComponent} from './functions/operators/with-latest-from/with-latest-from.component';
import {MapToComponent} from './functions/operators/map-to/map-to.component';
import { PairwiseComponent } from './functions/operators/pairwise/pairwise.component';
import { DelayComponent } from './functions/operators/delay/delay.component';
import { TimeoutComponent } from './functions/operators/timeout/timeout.component';
import { ToArrayComponent } from './functions/operators/to-array/to-array.component';
import { DefaultIfEmptyComponent } from './functions/operators/default-if-empty/default-if-empty.component';
import { IsEmptyComponent } from './functions/operators/is-empty/is-empty.component';
import { StartWithComponent } from './functions/operators/start-with/start-with.component';


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
    ExpandComponent,
    BufferComponent,
    BufferWhenComponent,
    BufferCountComponent,
    BufferTimeComponent,
    WindowComponent,
    WindowTimeComponent,
    WindowCountComponent,
    WindowWhenComponent,
    AuditTimeComponent,
    DebounceTimeComponent,
    ElementAtComponent,
    SampleTimeComponent,
    SkipComponent,
    SkipLastComponent,
    TakeComponent,
    TakeLastComponent,
    ThrottleTimeComponent,
    DistinctUntilKeyChangedComponent,
    IgnoreElementsComponent,
    ConcatAllComponent,
    MergeAllComponent,
    WithLatestFromComponent,
    MapToComponent,
    PairwiseComponent,
    DelayComponent,
    TimeoutComponent,
    ToArrayComponent,
    DefaultIfEmptyComponent,
    IsEmptyComponent,
    StartWithComponent,
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
