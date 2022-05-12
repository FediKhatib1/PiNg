import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetailsffrontComponent } from './eventdetailsffront.component';

describe('EventdetailsffrontComponent', () => {
  let component: EventdetailsffrontComponent;
  let fixture: ComponentFixture<EventdetailsffrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventdetailsffrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdetailsffrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
