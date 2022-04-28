import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileFeedComponent } from './my-profile-feed.component';

describe('MyProfileFeedComponent', () => {
  let component: MyProfileFeedComponent;
  let fixture: ComponentFixture<MyProfileFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
