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

export interface CheckboxOption {
  id: string | number;
  value: string;
}

@Component({
  selector: 'willow-checkbox-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  template: `
    <label class="wl-label" *ngIf="label">
      {{ label }}<span class="asterisk" *ngIf="required">*</span>
    </label>

    <div
      class="checkbox-list"
      [ngClass]="{
        error: control.invalid && (control.dirty || control.touched)
      }"
    >
      <label
        class="checkbox-item"
        *ngFor="let option of options; trackBy: trackById"
      >
        <input
          type="checkbox"
          [value]="option.id"
          (change)="onToggle($event, option)"
          [checked]="isChecked(option)"
        />
        <span class="custom-box"></span>
        <span class="option-label">{{ option.value }}</span>
      </label>
    </div>

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
        align-items: flex-start;
        width: 100%;
      }
      .wl-label {
        color: var(--component-forms-willow-field-text, #4b4c4d);
        font-family: var(--text-family-body, Roboto);
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
      }
      .asterisk {
        color: var(--component-forms-willow-required-asterisk, #b44242);
      }

      .checkbox-list {
        display: flex;
        flex-direction: column;
        gap: var(--icon-spacing-willow-spacing-xs, 8px);
        align-self: stretch;
        padding: 8px 4px;
        border: 2px solid transparent;
        border-radius: 2px;
      }

      .checkbox-list.error {
        border-color: var(--component-forms-willow-field-error-stroke, #b44242);
      }

      .checkbox-item {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        font-family: var(--text-family-body, Roboto);
        font-size: 16px;
      }

      .checkbox-item input {
        position: absolute;
        opacity: 0;
      }

      .custom-box {
        width: 24px;
        height: 24px;
        border-radius: 2px;
        border: 2px solid #757575;
        background: #fff;
        display: inline-block;
        position: relative;
      }

      .checkbox-item input:checked + .custom-box {
        background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2225%22 height=%2224%22 viewBox=%220 0 25 24%22 fill=%22none%22%3E%3Crect x=%221%22 y=%221%22 width=%2222.092%22 height=%2222%22 rx=%221%22 fill=%22white%22/%3E%3Crect x=%221%22 y=%221%22 width=%2222.092%22 height=%2222%22 rx=%221%22 stroke=%22%23757575%22 stroke-width=%222%22/%3E%3Cpath d=%22M10.6034 17.7644L19.8563 8.51142C20.1705 8.19718 20.1705 7.68774 19.8563 7.37354L18.7185 6.23565C18.4043 5.92145 17.8948 5.92145 17.5806 6.23565L10.0345 13.7817L6.51139 10.2586C6.19718 9.94441 5.68771 9.94441 5.3735 10.2586L4.23565 11.3965C3.92145 11.7108 3.92145 12.2202 4.23565 12.5344L9.46556 17.7643C9.77973 18.0786 10.2892 18.0786 10.6034 17.7644Z%22 fill=%22%23005589%22/%3E%3C/svg%3E');
        background-repeat: no-repeat;
        background-position: center;
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
export class FormCheckboxComponent implements OnInit {
  @Input() label = '';
  @Input() control!: FormControl<any[]>; // stores ids array
  @Input() required = false;
  @Input() options: CheckboxOption[] = [];
  @Input() errorText = 'Please select a value';
  @Input() showErrors = false;

  warningIcon = faTriangleExclamation;

  ngOnInit(): void {
    if (!this.control) {
      throw new Error('FormCheckboxComponent requires a FormControl instance via [control] input.');
    }
  }

  trackById = (index: number, item: CheckboxOption) => item.id;

  isChecked(option: CheckboxOption): boolean {
    return Array.isArray(this.control.value) && this.control.value.includes(option.id);
  }

  onToggle(event: Event, option: CheckboxOption): void {
    const input = event.target as HTMLInputElement;
    const valueArray: any[] = Array.isArray(this.control.value) ? [...this.control.value] : [];

    if (input.checked) {
      if (!valueArray.includes(option.id)) {
        valueArray.push(option.id);
      }
    } else {
      const idx = valueArray.indexOf(option.id);
      if (idx > -1) {
        valueArray.splice(idx, 1);
      }
    }

    this.control.setValue(valueArray);
    this.control.markAsDirty();
    this.control.markAsTouched();
  }
} 