import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripfrontComponent } from './tripfront.component';

describe('TripfrontComponent', () => {
  let component: TripfrontComponent;
  let fixture: ComponentFixture<TripfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripfrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
