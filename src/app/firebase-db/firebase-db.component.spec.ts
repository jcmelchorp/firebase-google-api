import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseDbComponent } from './firebase-db.component';

describe('FirebaseDbComponent', () => {
  let component: FirebaseDbComponent;
  let fixture: ComponentFixture<FirebaseDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
