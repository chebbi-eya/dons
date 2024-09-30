import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsjouetComponent } from './donsjouet.component';

describe('DonsjouetComponent', () => {
  let component: DonsjouetComponent;
  let fixture: ComponentFixture<DonsjouetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonsjouetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonsjouetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
