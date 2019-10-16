import { Component, Input } from '@angular/core';

import { Record } from '../../models/record.interface';

@Component({
  selector: 'record-count',
  template: `
    <div>
      <h3>All My Records!</h3>
      <div>
        Total number of records: {{ recordCount() }}
      </div>
    </div>
  `
})
export class RecordCountComponent {
  @Input()
  items: Record[];
  recordCount(): number {
    if (!this.items) { return; }
    return this.items.length;
  }
}
