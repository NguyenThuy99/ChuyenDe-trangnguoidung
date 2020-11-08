import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinhnghiemComponent } from './kinhnghiem.component';

describe('KinhnghiemComponent', () => {
  let component: KinhnghiemComponent;
  let fixture: ComponentFixture<KinhnghiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinhnghiemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinhnghiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
