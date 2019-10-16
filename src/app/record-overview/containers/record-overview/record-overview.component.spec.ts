import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOverviewComponent } from './record-overview.component';

describe('RecordOverviewComponent', () => {
  let component: RecordOverviewComponent;
  let fixture: ComponentFixture<RecordOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
