import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcalComponent } from './eventcal.component';

describe('EventcalComponent', () => {
  let component: EventcalComponent;
  let fixture: ComponentFixture<EventcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventcalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
