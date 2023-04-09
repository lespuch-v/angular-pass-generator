import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPassComponent } from './main-pass.component';

describe('MainPassComponent', () => {
  let component: MainPassComponent;
  let fixture: ComponentFixture<MainPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
