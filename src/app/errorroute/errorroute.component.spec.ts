import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorrouteComponent } from './errorroute.component';

describe('ErrorrouteComponent', () => {
  let component: ErrorrouteComponent;
  let fixture: ComponentFixture<ErrorrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
