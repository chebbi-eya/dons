import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutedonsComponent } from './ajoutedons.component';

describe('AjoutedonsComponent', () => {
  let component: AjoutedonsComponent;
  let fixture: ComponentFixture<AjoutedonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutedonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutedonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
