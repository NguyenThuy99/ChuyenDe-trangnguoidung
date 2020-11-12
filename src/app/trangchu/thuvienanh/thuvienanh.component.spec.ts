import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuvienanhComponent } from './thuvienanh.component';

describe('ThuvienanhComponent', () => {
  let component: ThuvienanhComponent;
  let fixture: ComponentFixture<ThuvienanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThuvienanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuvienanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
