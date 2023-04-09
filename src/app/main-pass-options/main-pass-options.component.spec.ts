import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPassOptionsComponent } from './main-pass-options.component';

describe('MainPassOptionsComponent', () => {
  let component: MainPassOptionsComponent;
  let fixture: ComponentFixture<MainPassOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPassOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPassOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
