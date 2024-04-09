import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbSliderComponent } from './breadcrumb-slider.component';

describe('BreadcrumbSliderComponent', () => {
  let component: BreadcrumbSliderComponent;
  let fixture: ComponentFixture<BreadcrumbSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreadcrumbSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
