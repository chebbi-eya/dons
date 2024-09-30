import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsautreComponent } from './donsautre.component';

describe('DonsautreComponent', () => {
  let component: DonsautreComponent;
  let fixture: ComponentFixture<DonsautreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonsautreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonsautreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
