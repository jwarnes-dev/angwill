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

      .primary:hover {
        background: var(--component-button-willow-primary-dark-hover-fill, #0F3659);
      }

      /* SECONDARY */
      .secondary {
        border: var(--component-button-willow-secondary-stroke-thickness, 2px)
          solid var(--component-button-willow-secondary-dark-default-stroke, #005589);
        background: var(--component-button-willow-secondary-dark-default-fill, #fff);
        color: var(--component-button-willow-secondary-dark-default-stroke, #005589);
      }

      .secondary:hover {
        color: var(--component-button-willow-secondary-dark-hover-text, #0F3659);
        border-color: var(--component-button-willow-secondary-dark-hover-text, #0F3659);
      }

      /* TERTIARY (link-style) */
      .tertiary {
        background: transparent;
        color: var(--component-button-willow-tertiary-dark-default-text, #005589);
        text-align: center;

        /* Component/button/willow/Tertiary */
        font-family: var(--text-family-body, Roboto);
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: var(--text-line-height-28, 28px); /* 155.556% */
        letter-spacing: -0.032px;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
      }

      .tertiary:hover {
        color: var(--component-button-willow-tertiary-dark-hover-text, #0F3659);
      }

      /* DESTRUCTIVE overrides */
      .destructive {
        background: var(--component-button-willow-destructive-default-fill, #b44242) !important;
        border-color: var(--component-button-willow-destructive-default-fill, #b44242) !important;
        color: var(--component-button-willow-destructive-text, #fff) !important;
      }

      .destructive:hover {
        background: var(--component-button-willow-destructive-hover-fill, #862F2F) !important;
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