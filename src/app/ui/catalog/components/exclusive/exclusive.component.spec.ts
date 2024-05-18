import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveComponent } from './exclusive.component';

describe('ExclusiveComponent', () => {
  let component: ExclusiveComponent;
  let fixture: ComponentFixture<ExclusiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExclusiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
