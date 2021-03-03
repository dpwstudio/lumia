import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteComponent } from './porte.component';

describe('PorteComponent', () => {
  let component: PorteComponent;
  let fixture: ComponentFixture<PorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
