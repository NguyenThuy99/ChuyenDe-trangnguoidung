import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoatdongComponent } from './hoatdong.component';

describe('HoatdongComponent', () => {
  let component: HoatdongComponent;
  let fixture: ComponentFixture<HoatdongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoatdongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoatdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
