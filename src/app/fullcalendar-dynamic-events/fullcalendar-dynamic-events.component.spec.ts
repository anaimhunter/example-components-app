import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcalendarDynamicEventsComponent } from './fullcalendar-dynamic-events.component';

describe('FullcalendarDynamicEventsComponent', () => {
  let component: FullcalendarDynamicEventsComponent;
  let fixture: ComponentFixture<FullcalendarDynamicEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcalendarDynamicEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcalendarDynamicEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
