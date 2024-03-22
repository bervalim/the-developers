import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersSectionComponent } from './developers-section.component';

describe('DevelopersSectionComponent', () => {
  let component: DevelopersSectionComponent;
  let fixture: ComponentFixture<DevelopersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopersSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
