import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitiettkbComponent } from './chitiettkb.component';

describe('ChitiettkbComponent', () => {
  let component: ChitiettkbComponent;
  let fixture: ComponentFixture<ChitiettkbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitiettkbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitiettkbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
