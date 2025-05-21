import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export enum TypographyVariant {
  Body = 'body',
  Small = 'small',
  Link = 'link',
  Display = 'display',
  Heading1 = 'heading1',
  Heading2 = 'heading2',
  Heading3 = 'heading3',
  Heading4 = 'heading4',
  Heading5 = 'heading5',
  Heading6 = 'heading6'
}

@Component({
  selector: 'willow-typography',
  templateUrl: './typography.component.html',
  imports: [
    CommonModule
  ],
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {
  TypographyVariant = TypographyVariant;
  @Input() variant: TypographyVariant = TypographyVariant.Body;
  @Input() elementType: string | null = null;

  get element(): string {
    if (this.elementType) {
      return this.elementType;
    }

    switch (this.variant) {
      case TypographyVariant.Heading1:
        return 'h1';
      case TypographyVariant.Heading2:
        return 'h2';
      case TypographyVariant.Heading3:
        return 'h3';
      case TypographyVariant.Heading4:
        return 'h4';
      case TypographyVariant.Heading5:
        return 'h5';
      case TypographyVariant.Body:
        return 'p';
      default:
        return 'span';
    }
  }
}
