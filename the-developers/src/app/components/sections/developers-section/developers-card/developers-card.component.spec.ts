import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersCardComponent } from './developers-card.component';

describe('DevelopersCardComponent', () => {
  let component: DevelopersCardComponent;
  let fixture: ComponentFixture<DevelopersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopersCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
