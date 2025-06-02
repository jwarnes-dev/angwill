import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type WillowButtonVariant = 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 'willow-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="wl-btn"
      [ngClass]="computedClass"
      [disabled]="disabled"
      [attr.type]="htmlType"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      .wl-btn {
        display: inline-flex;
        padding: var(--component-button-willow-layout-top-bottom-padding, 12px)
          var(--component-button-willow-layout-right-left-padding, 36px);
        justify-content: center;
        align-items: center;
        gap: var(--component-button-willow-layout-icon-text-padding, 12px);
        font-family: var(--text-family-body, Roboto);
        font-size: 18px;
        font-weight: 500;
        line-height: var(--text-line-height-28, 28px);
        border-radius: var(--component-button-willow-layout-corner-radius, 2px);
        cursor: pointer;
        border: none;
      }

      /* PRIMARY DEFAULT */
      .primary {
        background: var(--color-willow-blue, #4a7390);
        color: var(--component-button-willow-primary-dark-default-text, #fff);
      }

      /* SECONDARY */
      .secondary {
        border: var(--component-button-willow-secondary-stroke-thickness, 2px)
          solid var(--component-button-willow-secondary-dark-default-stroke, #005589);
        background: var(--component-button-willow-secondary-dark-default-fill, #fff);
        color: var(--component-button-willow-secondary-dark-default-stroke, #005589);
      }

      /* TERTIARY (link-style) */
      .tertiary {
        background: transparent;
        color: var(--color-willow-blue, #4a7390);
      }

      /* DESTRUCTIVE overrides */
      .destructive {
        background: var(--component-button-willow-destructive-default-fill, #b44242) !important;
        border-color: var(--component-button-willow-destructive-default-fill, #b44242) !important;
        color: var(--component-button-willow-destructive-text, #fff) !important;
      }

      /* DISABLED */
      .wl-btn:disabled {
        background: var(--component-button-willow-disabled-all-disabled-fill, #f2f2f3) !important;
        color: var(--component-button-willow-disabled-all-disabled-text, #4b4c4d) !important;
        border-color: var(--component-button-willow-disabled-all-disabled-fill, #f2f2f3) !important;
        cursor: not-allowed;
        opacity: 0.7;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /** Button visual variant */
  @Input() variant: WillowButtonVariant = 'primary';

  /** Native button type attribute */
  @Input() htmlType: 'button' | 'submit' | 'reset' = 'button';

  /** Destructive style flag */
  @Input() destructive = false;

  /** Disables the button */
  @Input() disabled = false;

  get computedClass(): string[] {
    const classes: string[] = [this.variant];
    if (this.destructive) {
      classes.push('destructive');
    }
    return classes;
  }
} 