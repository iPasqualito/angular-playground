import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RecordOverviewComponent } from './containers/record-overview/record-overview.component';
import {RecordCountComponent} from './components/record-count/record-count.component';
import {RecordDetailComponent} from './components/record-detail/record-detail.component';

import {RecordOverviewService} from './record-overview.service';


@NgModule({
  declarations: [
    RecordOverviewComponent,
    RecordCountComponent,
    RecordDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    RecordOverviewComponent
  ],
  providers: [
    RecordOverviewService
  ]
})
export class RecordOverviewModule { }
