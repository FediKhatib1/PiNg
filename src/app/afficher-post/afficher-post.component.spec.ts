import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPostComponent } from './afficher-post.component';

describe('AfficherPostComponent', () => {
  let component: AfficherPostComponent;
  let fixture: ComponentFixture<AfficherPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
