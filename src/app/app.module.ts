import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RecordOverviewModule} from './record-overview/record-overview.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RecordOverviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
