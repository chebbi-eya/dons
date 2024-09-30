import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsbricoComponent } from './donsbrico.component';

describe('DonsbricoComponent', () => {
  let component: DonsbricoComponent;
  let fixture: ComponentFixture<DonsbricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonsbricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonsbricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
