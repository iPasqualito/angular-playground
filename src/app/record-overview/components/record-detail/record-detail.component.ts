import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Record } from '../../models/record.interface';

@Component({
  selector: 'record-detail',
  styleUrls: ['record-detail.component.scss'],
  template: `
    <div>
        {{ detail | json }}
    </div>
  `
})
export class RecordDetailComponent implements OnChanges {

  @Input()
  detail: Record;

  @Output()
  edit: EventEmitter<Record> = new EventEmitter<Record>();

  @Output()
  remove: EventEmitter<Record> = new EventEmitter<Record>();

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onNameChange(value: string) {
    this.detail.Title = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
}
