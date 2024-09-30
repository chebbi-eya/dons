import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsmeubleComponent } from './donsmeuble.component';

describe('DonsmeubleComponent', () => {
  let component: DonsmeubleComponent;
  let fixture: ComponentFixture<DonsmeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonsmeubleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonsmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
