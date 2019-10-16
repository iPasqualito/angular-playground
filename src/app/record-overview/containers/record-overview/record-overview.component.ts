import { Component, OnInit } from '@angular/core';

import { RecordOverviewService } from '../../record-overview.service';

import { Record } from '../../models/record.interface';

@Component({
  selector: 'app-record-overview',
  templateUrl: './record-overview.component.html',
  styleUrls: ['./record-overview.component.scss']
})

export class RecordOverviewComponent implements OnInit {
  records: Record[];
  constructor(private recordService: RecordOverviewService) {}
  ngOnInit() {
    this.recordService
      .getRecords()
      .subscribe((data: Record[]) => this.records = data);
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
