import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'willow-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  template: `
    <label class="wl-label" *ngIf="label">
      {{ label }}<span class="asterisk" *ngIf="required">*</span>
    </label>

    <input
      [attr.type]="type"
      [formControl]="control"
      class="wl-input"
      [ngClass]="{ error: control.invalid && (control.dirty || control.touched) }"
    />

    <div
      class="error-msg"
      *ngIf="showErrors && control?.invalid"
    >
      <fa-icon [icon]="warningIcon" class="icon"></fa-icon>
      <span>{{ errorText }}</span>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        width: 100%;
      }
      .wl-label {
        color: #4b4c4d;
        font-family: var(--text-family-body, Roboto);
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
      }
      .asterisk {
        color: var(--component-forms-willow-required-asterisk, #b44242);
      }
      .wl-input {
        width: 100%;
        padding: 20px 16px;
        border-radius: var(--component-forms-willow-input-corner-radius, 2px);
        border: 2px solid var(--component-forms-willow-field-default-stroke, #757575);
        background: var(--component-forms-willow-field-default-fill, #fff);
        font-family: var(--text-family-body, Roboto);
        font-size: 16px;
      }
      .wl-input.error {
        border-color: var(
          --component-forms-myWellmark-field-error-stroke,
          #b44242
        );
      }
      .error-msg {
        color: var(--component-alerts-error-highlight, #b44242);
        font-family: var(--text-family-body, Roboto);
        font-size: 16px;
        line-height: 22.8px;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .icon {
        font-family: 'Font Awesome 6 Pro';
        font-weight: 900;
        font-size: 18px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent implements OnInit {
  /** Label to display above the field */
  @Input() label = '';

  /** Reactive form control instance */
  @Input() control!: FormControl;

  /** Marks field as required */
  @Input() required = false;

  /** HTML input type */
  @Input() type: 'text' | 'number' | 'tel' | 'email' | 'password' = 'text';

  /** Flag from parent to show errors */
  @Input() showErrors = false;

  warningIcon = faTriangleExclamation;

  /** Optional custom error message string */
  @Input() errorText = 'Invalid value';

  ngOnInit(): void {
    if (!this.control) {
      throw new Error('FormInputComponent requires a FormControl instance via [control] input.');
    }
  }
} 