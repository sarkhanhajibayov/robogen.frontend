import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestForTodayComponent } from './best-for-today.component';

describe('BestForTodayComponent', () => {
  let component: BestForTodayComponent;
  let fixture: ComponentFixture<BestForTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestForTodayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestForTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
