import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export interface SelectOption {
  id: string | number;
  value: string;
}

@Component({
  selector: 'willow-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  template: `
    <label class="wl-label" *ngIf="label">
      {{ label }}<span class="asterisk" *ngIf="required">*</span>
    </label>

    <select
      [formControl]="control"
      class="wl-select"
      [ngClass]="{ error: control.invalid && (control.dirty || control.touched) }"
    >
      <option value="" disabled selected *ngIf="placeholder">{{ placeholder }}</option>
      <option *ngFor="let option of options; trackBy: trackById" [ngValue]="option.id">
        {{ option.value }}
      </option>
    </select>

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
        gap: 4px;
        width: 100%;
        align-items: flex-start;
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
      .wl-select {
        width: 100%;
        padding: 20px 16px;
        border-radius: var(--component-forms-willow-input-corner-radius, 2px);
        border: 2px solid var(--component-forms-willow-field-default-stroke, #757575);
        background: var(--component-forms-willow-field-default-fill, #fff);
        font-family: var(--text-family-body, Roboto);
        font-size: 16px;
      }
      .wl-select.error {
        border-color: var(--component-forms-myWellmark-field-error-stroke, #b44242);
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
export class FormSelectComponent implements OnInit {
  @Input() label = '';
  @Input() control!: FormControl;
  @Input() required = false;
  @Input() options: SelectOption[] = [];
  @Input() errorText = 'Please select a value';
  @Input() placeholder?: string;
  @Input() showErrors = false;

  warningIcon = faTriangleExclamation;

  ngOnInit(): void {
    if (!this.control) {
      throw new Error('FormSelectComponent requires a FormControl instance via [control] input.');
    }
  }

  trackById = (index: number, item: SelectOption) => item.id;
} 