import {Component, OnInit, OnDestroy} from '@angular/core';

import {RecordOverviewService} from '../../record-overview.service';

import {Record} from '../../models/record.interface';
import {Subscription} from 'rxjs';
import {FormControl} from '@angular/forms';
import {debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'app-record-overview',
  templateUrl: './record-overview.component.html',
  styleUrls: ['./record-overview.component.scss']
})

export class RecordOverviewComponent implements OnInit, OnDestroy{
  records: Record[] = [];
  filteredRecords: Record[];
  search: FormControl = new FormControl();
  myRecordSub: Subscription;

  constructor(private recordService: RecordOverviewService) {
  }

  ngOnInit() {
    this.myRecordSub =  this.recordService
      .getRecords()
      .subscribe((data: Record[]) => {
        this.records = data;
        this.filteredRecords = this.records;
    });

    this.search.valueChanges.pipe(
    ).subscribe( search => {
        this.filteredRecords = this.records.filter( records => {
          return records.Artist.toLowerCase().includes(search.toLowerCase()) ||
                records.Title.toLowerCase().includes(search.toLowerCase());
        });
    });
  }



  ngOnDestroy(): void {
      this.myRecordSub.unsubscribe();
  }

  // handleEdit(event: Record) {
  //   this.recordService
  //     .updateRecord(event)
  //     .subscribe((data: Record) => {
  //       this.records = this.records.map((record: Record) => {
  //         if (record.release_id === event.release_id) {
  //           record = Object.assign({}, record, event);
  //         }
  //         return record;
  //       });
  //     });
  // }
  // handleRemove(event: Record) {
  //   this.recordService
  //     .removeRecord(event)
  //     .subscribe((data: Record) => {
  //       this.records = this.records.filter((record: Record) => {
  //         return record.release_id !== event.release_id;
  //       });
  //     });
  // }
}
