import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietchudeComponent } from './chitietchude.component';

describe('ChitietchudeComponent', () => {
  let component: ChitietchudeComponent;
  let fixture: ComponentFixture<ChitietchudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietchudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietchudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
