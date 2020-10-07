import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocautochucComponent } from './cocautochuc.component';

describe('CocautochucComponent', () => {
  let component: CocautochucComponent;
  let fixture: ComponentFixture<CocautochucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocautochucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocautochucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
