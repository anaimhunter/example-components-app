import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableCsvComponent } from './data-table-csv.component';

describe('DataTableCsvComponent', () => {
  let component: DataTableCsvComponent;
  let fixture: ComponentFixture<DataTableCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
