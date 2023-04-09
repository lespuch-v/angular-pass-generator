import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassIndicatorComponent } from './pass-indicator.component';

describe('PassIndicatorComponent', () => {
  let component: PassIndicatorComponent;
  let fixture: ComponentFixture<PassIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
