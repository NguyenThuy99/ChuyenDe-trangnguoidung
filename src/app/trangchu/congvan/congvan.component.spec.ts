import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongvanComponent } from './congvan.component';

describe('CongvanComponent', () => {
  let component: CongvanComponent;
  let fixture: ComponentFixture<CongvanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongvanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
