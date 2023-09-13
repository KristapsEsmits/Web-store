import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCartComponent } from './full-cart.component';

describe('FullCartComponent', () => {
  let component: FullCartComponent;
  let fixture: ComponentFixture<FullCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullCartComponent]
    });
    fixture = TestBed.createComponent(FullCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
