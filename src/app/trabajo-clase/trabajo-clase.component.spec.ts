import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoClaseComponent } from './trabajo-clase.component';

describe('TrabajoClaseComponent', () => {
  let component: TrabajoClaseComponent;
  let fixture: ComponentFixture<TrabajoClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoClaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
