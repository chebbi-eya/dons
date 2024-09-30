import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirdonsComponent } from './voirdons.component';

describe('VoirdonsComponent', () => {
  let component: VoirdonsComponent;
  let fixture: ComponentFixture<VoirdonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirdonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirdonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
