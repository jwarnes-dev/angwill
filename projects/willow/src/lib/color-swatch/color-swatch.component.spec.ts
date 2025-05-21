import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSwatchComponent } from './color-swatch.component';

describe('ColorSwatchComponent', () => {
  let component: ColorSwatchComponent;
  let fixture: ComponentFixture<ColorSwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSwatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate text color based on background brightness', () => {
    // Light background should use dark text
    component.color = '#FFFFFF';
    expect(component.textColorClass).toBe('text-dark');

    // Dark background should use light text
    component.color = '#000000';
    expect(component.textColorClass).toBe('text-light');
  });
}); 