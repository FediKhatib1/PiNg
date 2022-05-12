import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumbackComponent } from './forumback.component';

describe('ForumbackComponent', () => {
  let component: ForumbackComponent;
  let fixture: ComponentFixture<ForumbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
