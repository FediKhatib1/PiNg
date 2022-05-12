import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCommentComponent } from './afficher-comment.component';

describe('AfficherCommentComponent', () => {
  let component: AfficherCommentComponent;
  let fixture: ComponentFixture<AfficherCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
