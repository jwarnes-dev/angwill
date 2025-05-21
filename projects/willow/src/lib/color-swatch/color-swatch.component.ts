import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TypographyVariant } from '../typography/typography.component';

export enum ColorSwatchSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

@Component({
  selector: 'willow-color-swatch',
  templateUrl: './color-swatch.component.html',
  imports: [
    CommonModule
  ],
  styleUrls: ['./color-swatch.component.scss']
})
export class ColorSwatchComponent {
  ColorSwatchSize = ColorSwatchSize;

  @Input() color: string = '#CCCCCC';
  @Input() name: string = '';
  @Input() hexValue: string = '';
  @Input() size: ColorSwatchSize = ColorSwatchSize.Medium;
  @Input() showInfo: boolean = true;
  @Input() dark: boolean = false;


  type = TypographyVariant;

  get sizeClass(): string {
    return `swatch-${this.size}`;
  }

  get textColorClass(): string {
    // Determine if text should be light or dark based on background color
    // experiemental
    const hex = this.color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Calculate perceived brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? 'text-dark' : 'text-light';
  }
} 