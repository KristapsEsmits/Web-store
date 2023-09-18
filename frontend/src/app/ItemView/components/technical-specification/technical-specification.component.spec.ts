import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSpecificationComponent } from './technical-specification.component';

describe('TechnicalSpecificationComponent', () => {
  let component: TechnicalSpecificationComponent;
  let fixture: ComponentFixture<TechnicalSpecificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalSpecificationComponent]
    });
    fixture = TestBed.createComponent(TechnicalSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
